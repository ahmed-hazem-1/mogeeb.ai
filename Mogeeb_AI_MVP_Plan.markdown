# Mogeeb.ai - خطة بناء المVP من A إلى Z

## نظرة عامة
Mogeeb.ai هي شركة ناشئة مصرية تهدف إلى تمكين الشركات الصغيرة بـ AI Agents لخدمة العملاء وأتمتة العمليات. المVP هو chatbot شات على واتساب يستخدم RAG مع AraBERT لردود دقيقة بناءً على بيانات مخصصة لكل شركة. التكلفة: 0 جنيه، المدة: 2-3 شهور.

## A. التحضير والإعداد (3-5 أيام)
- **الهدف**: إعداد البيئة بأدوات مجانية.
- **التفاصيل**:
  - تثبيت n8n محليًا (`n8n start`, `http://localhost:5678`).
  - نزل Python 3.10+ وGoogle Colab.
  - احصل على WhatsApp Business API Sandbox (Token من developers.meta.com).
  - جمع بيانات: 2-3 ملفات `clientX_data.txt` (20-50 فقرة لكل شركة) و`intents.csv` (50 عبارة مصرية).
  - اختبار: أضف Webhook في n8n، جرب بـ Postman.
- **الوقت**: 3-5 أيام.
- **التحدي**: شيك الـ port لو n8n مش بيشتغل.

## B. بناء الـ LLM الأساسي (AraBERT) (1 أسبوع)
- **الهدف**: تدريب AraBERT كـ base model.
- **التفاصيل**:
  - تنزيل: `from transformers import AutoTokenizer, AutoModelForSequenceClassification; tokenizer = AutoTokenizer.from_pretrained("aubmindlab/bert-base-arabert"); model = AutoModelForSequenceClassification.from_pretrained("aubmindlab/bert-base-arabert")`.
  - تدريب:
    ```python
    from datasets import load_dataset
    from transformers import Trainer, TrainingArguments

    dataset = load_dataset('csv', data_files='intents.csv')
    def preprocess_function(examples):
        return tokenizer(examples['question'], truncation=True, padding=True)
    tokenized_dataset = dataset.map(preprocess_function, batched=True)

    training_args = TrainingArguments(output_dir='./results', num_train_epochs=3, per_device_train_batch_size=4, save_steps=500)
    trainer = Trainer(model=model, args=training_args, train_dataset=tokenized_dataset['train'])
    trainer.train()
    trainer.save_model('./base_arabert')
    ```
  - اختبار: `inputs = tokenizer("عايز أعرف السعر", return_tensors="pt"); outputs = model(**inputs); print(outputs.logits)`.
- **الوقت**: 7 أيام.
- **التحدي**: أضف بيانات إذا الدقة منخفضة.

## C. بناء Vector Database بـ Faiss (4-6 أيام)
- **الهدف**: قاعدة بيانات لاسترجاع بيانات الشركات.
- **التفاصيل**:
  - تجهيز: `with open('client1_data.txt', 'r', encoding='utf-8') as f: documents = f.readlines()`.
  - Embeddings: `from sentence_transformers import SentenceTransformer; embedder = SentenceTransformer('distiluse-base-multilingual-cased-v1'); doc_embeddings = embedder.encode(documents)`.
  - Faiss Index:
    ```python
    import faiss
    import numpy as np
    doc_embeddings = np.array(doc_embeddings).astype('float32')
    dimension = doc_embeddings.shape[1]
    index = faiss.IndexFlatL2(dimension)
    index.add(doc_embeddings)
    faiss.write_index(index, 'client1_index.faiss')
    ```
  - اختبار: `query_embedding = embedder.encode(["إيه سعر التيشرت؟"])[0].astype('float32'); D, I = index.search(np.array([query_embedding]), k=3); print([documents[i] for i in I[0] if i != -1])`.
- **الوقت**: 4-6 أيام.
- **التحدي**: استخدم `IndexIVFFlat` لو بطيء.

## D. تطوير RAG System (1 أسبوع)
- **الهدف**: دمج الاسترجاع والتوليد.
- **التفاصيل**:
  - استرجاع:
    ```python
    def retrieve(query, client_id='client1'):
        index = faiss.read_index(f'{client_id}_index.faiss')
        query_embedding = embedder.encode([query])[0].astype('float32')
        D, I = index.search(np.array([query_embedding]), k=3)
        return [documents[i] for i in I[0] if i != -1]
    ```
  - توليد:
    ```python
    from transformers import pipeline
    generator = pipeline('text-generation', model='./base_arabert')
    def generate_response(query, client_id):
        retrieved = retrieve(query, client_id)
        context = " ".join(retrieved)
        prompt = f"بناءً على: {context}\nسؤال: {query}\nرد: "
        return generator(prompt, max_length=100)[0]['generated_text']
    ```
  - اختبار: `print(generate_response("إيه سعر التيشرت؟", "client1"))`.
- **الوقت**: 7 أيام.
- **التحدي**: أضف reranking بـ `cosine_similarity` لو الدقة منخفضة.

## E. إنشاء API لـ RAG (3-4 أيام)
- **الهدف**: جعل RAG متاح عبر API.
- **التفاصيل**:
  - Flask API:
    ```python
    from flask import Flask, request, jsonify
    from flask_ngrok import run_with_ngrok
    app = Flask(__name__)
    run_with_ngrok(app)
    @app.route('/rag', methods=['POST'])
    def rag():
        data = request.json
        query = data['query']
        client_id = data['client_id']
        response = generate_response(query, client_id)
        return jsonify({"answer": response})
    app.run()
    ```
  - شغل ngrok: `!pip install flask-ngrok`.
  - اختبار: POST request بـ Postman (`{"query": "إيه السعر؟", "client_id": "client1"}`).
- **الوقت**: 3-4 أيام.
- **التحدي**: أعد تشغيل ngrok كل 2 ساعة.

## F. تكامل n8n مع RAG (5-7 أيام)
- **الهدف**: أتمتة الـ chatbot.
- **التفاصيل**:
  - Workflow:
    - WhatsApp Trigger (مع Token).
    - Set: استخرج `query` و`client_id`.
    - HTTP Request: أرسل لـ ngrok_url/rag.
    - WhatsApp Response: أرسل الـ answer.
  - اختبار: أرسل رسالة واتساب، تأكد إن الرد مخصص.
- **الوقت**: 5-7 أيام.
- **التحدي**: شيك سرعة الاتصال.

## G. الاختبار والتحسين (1 أسبوع)
- **الهدف**: رفع الدقة إلى 90%+.
- **التفاصيل**:
  - اختبار: 50 سؤال لكل client، قيس بـ `from sklearn.metrics import f1_score`.
  - تحسين:
    ```python
    from sklearn.metrics.pairwise import cosine_similarity
    similarities = cosine_similarity(query_embedding.reshape(1, -1), doc_embeddings)
    top_indices = np.argsort(similarities[0])[-3:]
    ```
  - أمان: نود "If" في n8n لفحص client_id.
- **الوقت**: 7 أيام.

## H. الإطلاق التجريبي (3-5 أيام)
- **الهدف**: عرض الـ MVP.
- **التفاصيل**:
  - Demo: فيديو 30 ثانية بـ Loom، ارفع على linkedin.com/company/mogeeb-ai.
  - عملاء: راسل 5 SMEs بتجربة مجانية.
  - Feedback: Google Forms.
- **الوقت**: 3-5 أيام.

## I. التقديم للدعم (1-2 أسبوع)
- **الهدف**: طلب تمويل.
- **التفاصيل**:
  - قدم لـ ITIDA SECC (itida.gov.eg) مع الـ MVP.
  - استعد لـ StartIT (TIEC).
- **الوقت**: 1-2 أسبوع.

## الناس المطلوبة
- **المؤسس (أنت)**: خبير AI/Python، يدير كل الخطوات (90%).
- **مساعد Developer (مستحسن)**: زميل DEPI لمساعدة في n8n/RAG (حصة 15%).
- **اختباري (اختياري)**: 2-3 أصدقاء.

## نصايح
- ابدأ دلوقتي (03:22 PM EEST, September 28, 2025) بتثبيت الأدوات.
- لو الدقة منخفضة، زد البيانات أو استخدم 'all-MiniLM-L6-v2'.
- لو عايز كود إضافي، قول!