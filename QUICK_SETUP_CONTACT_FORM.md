# 🚀 Quick Setup: Contact Form (5 Minutes)

## What You Need to Do

Your contact form **WILL NOT WORK** after deployment until you add EmailJS credentials.

---

## ⚡ Quick Steps

### 1️⃣ Sign Up (2 min)
- Go to: **https://www.emailjs.com/**
- Create FREE account
- Verify email

### 2️⃣ Connect Email (1 min)
- Dashboard → "Email Services" → "Add New Service"
- Choose Gmail
- Copy **Service ID** (e.g., `service_abc123`)

### 3️⃣ Create Template (1 min)
- Dashboard → "Email Templates" → "Create New Template"
- Subject: `New Message from {{name}}`
- Body: Use the template from `EMAIL_SETUP_GUIDE.md`
- Copy **Template ID** (e.g., `template_xyz789`)

### 4️⃣ Get Public Key (30 sec)
- Dashboard → "Account" → "General"
- Copy **Public Key** (e.g., `user_def456`)

### 5️⃣ Update Code (30 sec)
Open: `src/components/Contact.js`
Find: **Lines 45-47**

Replace:
```javascript
'YOUR_SERVICE_ID',
'YOUR_TEMPLATE_ID',
'YOUR_PUBLIC_KEY'
```

With your actual values:
```javascript
'service_abc123',      // Your Service ID
'template_xyz789',     // Your Template ID
'user_def456'          // Your Public Key
```

### 6️⃣ Test (30 sec)
- Save file
- Fill contact form
- Click "Send Message"
- Check your email inbox

---

## ✅ After Setup

**Will Work On:**
- ✅ Vercel
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Any static hosting

**No Need For:**
- ❌ Backend server
- ❌ Database
- ❌ Environment variables
- ❌ Additional configuration

---

## 📧 Where Emails Go

All contact form submissions will be sent to the email you connected in Step 2.

---

## 🆓 Free Plan

- 200 emails/month
- Perfect for portfolio
- No credit card required

---

## ⚠️ Important

**DO THIS BEFORE DEPLOYING** or your contact form won't work!

---

## Need Help?

See full guide: `CONTACT_FORM_DEPLOYMENT_GUIDE.md`
