# Mogeeb.ai Website Design Guide

## Table of Contents
1. [Company Overview](#company-overview)
2. [Website Goals](#website-goals)
3. [Brand Identity & Logo](#brand-identity--logo)
4. [Color Palette](#color-palette)
5. [Typography](#typography)
6. [Website Structure](#website-structure)
7. [Content Guidelines](#content-guidelines)
8. [Visual Design Rules](#visual-design-rules)
9. [Responsive Design](#responsive-design)
10. [Implementation Guidelines](#implementation-guidelines)
11. [SEO & Analytics](#seo--analytics)
12. [Technical Requirements](#technical-requirements)
13. [Future Scalability](#future-scalability)

---

## Company Overview

**Company Name:** Mogeeb.ai  
**Tagline:** "مجيب... زِد مبيعاتك ووفر وقتك مع مجيب"  
**Mission:** Empower SMEs with cost-effective AI to boost productivity and customer satisfaction  
**Target Market:** 600,000 SMEs in Egypt, aiming for 50 clients in the first year  
**Location:** Cairo, Egypt  
**Future Expansion:** MENA region  

### Services
- WhatsApp chatbot with Egyptian Arabic dialect support
- Automation tools (customer segmentation, order tracking)
- Odoo integration
- AI solutions for small and medium businesses

---

## Website Goals

### Primary Objectives
- Attract potential clients (e-commerce, food delivery businesses)
- Encourage sign-ups for free trial
- Build trust through founder expertise and program support
- Showcase AI chatbot and automation tools
- Prepare for future scalability (bilingual Arabic/English)

### Target Actions
- Free trial sign-ups
- Contact form submissions
- WhatsApp direct contact
- Social media engagement

---

## Brand Identity & Logo

### Logo Analysis
- **Arabic Text:** "مجيب" in bold, modern Arabic typography
- **Icon:** Orange/red gradient circular chatbot head with headset
- **Style:** Clean, modern, professional, approachable
- **Personality:** Friendly, tech-forward, helpful, innovative

### Logo Usage Rules
- **Header:** Full logo prominently displayed
- **Favicon:** Simplified chatbot icon version
- **Footer:** Smaller version with copyright
- **Social Media:** Banner logo for consistency
- **Scaling:** Maintain clarity at all sizes
- **Background:** Ensure contrast on all backgrounds

---

## Color Palette

### Primary Colors
```css
:root {
  --primary-orange: #FF4500;      /* Main brand color */
  --gradient-orange: #FF6B35;     /* Lighter orange */
  --deep-red: #B22222;            /* Secondary brand color */
  --accent-purple: #6A0DAD;       /* Interactive accent */
  --background-white: #FFFFFF;    /* Main background */
  --light-orange: #FFF8F5;        /* Subtle background tint */
  --text-dark: #333333;           /* Main text color */
  --text-light: #666666;          /* Secondary text */
}
```

### Color Application Rules
- **Headers & Navigation:** Primary orange (#FF4500)
- **Buttons & CTAs:** Orange-to-red gradient
- **Hover States:** Accent purple (#6A0DAD)
- **Backgrounds:** White with light orange tints
- **Text:** Dark gray for readability
- **Accents:** Deep red for borders and highlights

### Gradient Definitions
- **Main Button:** `linear-gradient(135deg, #FF4500, #B22222)`
- **Background Accent:** `linear-gradient(135deg, #FFF8F5, #FFFFFF)`
- **Chatbot Icon:** `linear-gradient(135deg, #FF6B35, #FF4500)`

---

## Typography

### Arabic Typography
- **Primary Font:** Tajawal Bold or Cairo Bold
- **Style:** Clean, geometric, modern
- **Weight:** Bold for headers, regular for body
- **Direction:** Right-to-left (RTL) layout

### English Typography (Future)
- **Primary Font:** Roboto or Open Sans
- **Style:** Clean sans-serif
- **Compatibility:** Must complement Arabic fonts

### Typography Hierarchy
- **H1 (Main Headers):** Bold Arabic, 32-40px, primary orange
- **H2 (Section Headers):** Bold Arabic, 24-28px, deep red
- **H3 (Subsections):** Medium Arabic, 20-24px, text dark
- **Body Text:** Regular Arabic, 16-18px, text dark
- **Captions:** Regular Arabic, 14-16px, text light
- **Buttons:** Bold Arabic, 16-18px, white text

---

## Website Structure

### 1. Homepage
**Hero Section:**
- Mogeeb logo prominently displayed
- Main tagline: "مجيب... زِد مبيعاتك ووفر وقتك مع مجيب"
- Visual mockup of WhatsApp chatbot in action
- Primary CTA: "جرّب مجيب مجانًا" (Try for Free)
- Secondary CTA: "تواصل معنا" (Contact Us)

**Benefits Section:**
- زيادة المبيعات (Increase Sales)
- توفير الوقت (Save Time)
- دعم اللهجة المصرية (Egyptian Arabic Support)
- سهولة التكامل (Easy Integration)

**How It Works Section:**
- Simple 3-step process illustration
- Use chatbot icons with brand colors

**Pricing Preview:**
- Brief mention of free trial
- Link to full pricing on Products page

### 2. About Us Page
**Mission Statement:**
- Company mission in formal Arabic and Egyptian colloquial
- Vision for MENA expansion

**Founder Background:**
- DEPI graduate mention
- NLP experience highlight
- ITIDA/TIEC support (no personal details)

**Location:**
- Cairo headquarters mention
- Simple map of Cairo (no specific address)
- Future expansion plans

**Company Values:**
- Innovation, affordability, local support

### 3. Products Page
**WhatsApp Chatbot:**
- Egyptian Arabic dialect support
- Instant response capability
- Easy setup and integration
- Real-time customer engagement

**Automation Tools:**
- Customer segmentation
- Order tracking system
- Odoo ERP integration
- Analytics and reporting

**Pricing Table:**
- **Free Trial:** 14 days, basic features
- **Starter:** 3,000 EGP/month, small businesses
- **Professional:** 6,000 EGP/month, growing businesses
- **Enterprise:** 10,000 EGP/month, large operations

**General Scenarios:**
- "تخيل محل يوفر ٥ ساعات يوميًا مع مجيب"
- "زيادة المبيعات بنسبة تصل إلى ٣٠٪"
- "تحسين رضا العملاء وتقليل زمن الاستجابة"

### 4. Contact Page
**Contact Form:**
- Name (required)
- Email (required)
- WhatsApp number (required)
- Company name (optional)
- Message/Inquiry (required)

**Direct Contact:**
- WhatsApp Business API link
- LinkedIn: linkedin.com/company/mogeeb-ai
- Future: X (Twitter), Facebook

**Office Information:**
- Cairo, Egypt (general location)
- Business hours
- Response time commitment

### 5. Blog Page (Optional/Future)
**Content Categories:**
- AI tips for SMEs
- Egyptian business success stories
- WhatsApp marketing strategies
- Automation best practices

**Sample Topics:**
- "كيف تساعد الذكاء الاصطناعي الشركات الصغيرة في مصر"
- "استراتيجيات التسويق عبر الواتساب للمشاريع المصرية"
- "أتمتة خدمة العملاء: دليل المبتدئين"

---

## Content Guidelines

### Language & Tone
- **Mix:** Formal Arabic and Egyptian colloquial for authenticity
- **Tone:** Professional yet approachable, friendly, helpful
- **Style:** Clear, concise, benefit-focused

### Key Messages
- **Primary:** زيادة المبيعات (Increase Sales)
- **Secondary:** توفير الوقت (Save Time)
- **Unique:** دعم اللهجة المصرية (Egyptian Arabic Support)
- **Trust:** خبرة محلية وموثوقة (Local and Trusted Expertise)

### Content Rules
- No fake testimonials or data
- Use general scenarios and future client stories
- Focus on benefits, not just features
- Include clear calls-to-action
- Prepare for easy updates with real data

### SEO Keywords
**Arabic:**
- "شات بوت مصري"
- "ذكاء اصطناعي للشركات الصغيرة"
- "أتمتة خدمة العملاء مصر"
- "واتساب بيزنس مصر"

**English:**
- "Egypt AI chatbot"
- "WhatsApp business Egypt"
- "SME automation"
- "Egyptian Arabic chatbot"
- "Odoo integration Egypt"

---

## Visual Design Rules

### Layout Principles
- **Clean & Minimal:** Lots of whitespace
- **Mobile-First:** Prioritize mobile usability
- **Consistent:** Maintain brand elements throughout
- **Fast Loading:** Optimize for slow internet connections

### Icon Guidelines
- **Style:** Circular, gradient-filled icons
- **Colors:** Orange gradient with red accents
- **Size:** Consistent sizing across pages
- **Sources:** Font Awesome, Google Material Icons
- **Custom:** Chatbot-themed icons in brand style

### Image Guidelines
- **Style:** Simple illustrations, avoid heavy graphics
- **Colors:** Match brand palette
- **Format:** Optimized PNG/JPG for web
- **Alt Text:** Arabic descriptions for accessibility

### Button Design
- **Primary Buttons:** Orange-to-red gradient, white text, rounded corners
- **Secondary Buttons:** White background, orange border, orange text
- **Hover State:** Purple accent (#6A0DAD)
- **Size:** Large enough for mobile touch (minimum 44px height)

### Card/Section Design
- **Background:** White with subtle orange tint
- **Borders:** Light orange or deep red accents
- **Shadow:** Subtle, consistent across elements
- **Spacing:** Generous padding and margins

---

## Responsive Design

### Breakpoints
- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px+

### Mobile-First Rules
- **Navigation:** Hamburger menu with orange background
- **Logo:** Horizontal layout, maintain readability
- **Buttons:** Full-width on mobile, touch-friendly
- **Forms:** Single column, large input fields
- **Content:** Stack elements vertically

### Desktop Enhancements
- **Navigation:** Horizontal menu with hover effects
- **Layout:** Multi-column where appropriate
- **Images:** Larger, more detailed visuals
- **Animations:** Subtle hover effects and transitions

---

## Implementation Guidelines

### Recommended Platforms
1. **Wix:** Best for Arabic RTL support, drag-and-drop ease
2. **WordPress.com:** Good customization, Arabic fonts
3. **Google Sites:** Simplest, but limited customization

### Setup Checklist
- [ ] Upload Mogeeb logo and create favicon
- [ ] Set up custom color palette
- [ ] Install Arabic fonts (Cairo/Tajawal)
- [ ] Enable RTL layout
- [ ] Create all pages with proper navigation
- [ ] Set up contact form
- [ ] Add social media links
- [ ] Optimize for mobile
- [ ] Test on multiple devices
- [ ] Enable HTTPS
- [ ] Set up analytics

### Free Tools & Resources
- **Fonts:** Google Fonts (Cairo, Tajawal)
- **Icons:** Font Awesome, Google Material Icons
- **Images:** Unsplash, Pexels (with brand color overlays)
- **Color Tools:** Adobe Color, Coolors.co
- **Analytics:** Google Analytics, Google Search Console

---

## SEO & Analytics

### On-Page SEO
- **Title Tags:** Include target keywords in Arabic and English
- **Meta Descriptions:** Compelling descriptions with keywords
- **Header Tags:** Proper H1, H2, H3 hierarchy
- **Alt Text:** Descriptive text for all images
- **URL Structure:** Clean, keyword-rich URLs

### Content Strategy
- **Keyword Density:** Natural integration of target keywords
- **Local SEO:** Cairo, Egypt location mentions
- **Industry Keywords:** AI, chatbot, automation, SME
- **Arabic Content:** Rich, valuable content in Arabic

### Analytics Setup
- **Google Analytics:** Track visitors, behavior, conversions
- **Google Search Console:** Monitor search performance
- **Goal Tracking:** Contact form submissions, trial sign-ups
- **Conversion Funnels:** Track user journey from visit to contact

---

## Technical Requirements

### Performance
- **Page Load Speed:** Under 3 seconds
- **Image Optimization:** Compressed, web-optimized formats
- **Mobile Performance:** Fast loading on 3G connections
- **Caching:** Browser caching enabled

### Security
- **HTTPS:** SSL certificate required
- **Form Security:** Spam protection, data validation
- **Privacy:** GDPR-compliant contact forms
- **Backup:** Regular website backups

### Accessibility
- **Alt Text:** All images have descriptive alt text
- **Color Contrast:** Meet WCAG guidelines
- **Font Size:** Readable text sizes
- **Navigation:** Keyboard-accessible navigation

### Browser Compatibility
- **Modern Browsers:** Chrome, Firefox, Safari, Edge
- **Mobile Browsers:** iOS Safari, Chrome Mobile
- **RTL Support:** Proper right-to-left text rendering

---

## Future Scalability

### Bilingual Preparation
- **Content Structure:** Prepare for Arabic/English versions
- **URL Structure:** Plan for language-specific URLs
- **Navigation:** Language switcher placement
- **Fonts:** Ensure compatibility between Arabic and English fonts

### Feature Expansion
- **Client Portal:** Future client dashboard integration
- **Blog:** Content management system ready
- **Testimonials:** Section prepared for real client reviews
- **Case Studies:** Template for success stories

### Geographic Expansion
- **MENA Adaptation:** Flexible design for regional variations
- **Currency:** Prepare for multiple currency support
- **Legal:** Footer space for regional legal requirements

### Technical Scaling
- **Hosting:** Plan for increased traffic
- **Performance:** Optimize for growth
- **Integrations:** Prepare for CRM, analytics tools
- **Updates:** Easy content management system

---

## Implementation Timeline

### Week 1: Setup & Design
- [ ] Choose platform and template
- [ ] Upload logo and set brand colors
- [ ] Create page structure
- [ ] Set up Arabic fonts and RTL

### Week 2: Content & Testing
- [ ] Add all content
- [ ] Set up contact forms
- [ ] Mobile testing and optimization
- [ ] SEO setup and analytics

### Week 3: Launch & Monitor
- [ ] Final testing across devices
- [ ] Launch website
- [ ] Submit to search engines
- [ ] Monitor performance and make adjustments

---

## Maintenance & Updates

### Regular Tasks
- **Content Updates:** Keep pricing and features current
- **Security:** Regular platform updates
- **Performance:** Monitor loading speeds
- **Analytics:** Review visitor data monthly

### Quarterly Reviews
- **Content Refresh:** Update scenarios and benefits
- **SEO Performance:** Review keyword rankings
- **Competitor Analysis:** Check market positioning
- **User Feedback:** Incorporate user suggestions

### Annual Planning
- **Design Refresh:** Minor visual updates
- **Feature Expansion:** Add new sections or pages
- **Technology Update:** Platform and tool upgrades
- **Strategic Review:** Align with business growth

---

## Brand Guidelines Summary

### Do's
✅ Use the exact brand colors from the logo  
✅ Maintain consistent typography hierarchy  
✅ Include the chatbot character in visuals  
✅ Use gradient effects for buttons and accents  
✅ Keep design clean and professional  
✅ Prioritize mobile-first approach  
✅ Include clear calls-to-action  
✅ Use authentic Egyptian Arabic  

### Don'ts
❌ Use colors outside the brand palette  
❌ Mix different font families  
❌ Create fake testimonials or data  
❌ Overcomplicate the design  
❌ Ignore mobile optimization  
❌ Use generic stock photos  
❌ Forget RTL layout considerations  
❌ Compromise loading speed for visuals  

---

*This document serves as the complete guide for Mogeeb.ai website design and implementation. All team members and contractors should reference this guide to maintain brand consistency and quality standards.*

**Last Updated:** September 29, 2025  
**Version:** 1.0  
**Document Owner:** Mogeeb.ai Team