# Email Setup Guide for Contact Form

Your contact form is now configured to send emails using EmailJS. Follow these steps to set it up:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email
5. Copy the **Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New Contact Form Message from {{name}}

**Content:**
```
You have received a new message from your portfolio contact form.

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (also called API Key)
3. Copy it

## Step 5: Update Your Code

Open `src/components/Contact.js` and replace these values on lines 35-37:

```javascript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',        // Replace with your Service ID from Step 2
  'YOUR_TEMPLATE_ID',       // Replace with your Template ID from Step 3
  formRef.current,
  'YOUR_PUBLIC_KEY'         // Replace with your Public Key from Step 4
);
```

**Example:**
```javascript
const result = await emailjs.sendForm(
  'service_abc123',
  'template_xyz789',
  formRef.current,
  'user_def456ghi789'
);
```

## Step 6: Test Your Form

1. Save the file
2. The development server will reload automatically
3. Fill out the contact form and submit
4. Check your email inbox for the message

## Important Notes

- **Free Plan Limits:** EmailJS free plan allows 200 emails per month
- **Email Delivery:** Messages will be sent to the email you connected in Step 2
- **Security:** Your keys are safe to use in frontend code (they're public keys)
- **Spam Protection:** Consider adding reCAPTCHA for production use

## Alternative: Using Formspree (Simpler Option)

If you prefer a simpler setup without EmailJS:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for free account
3. Create a new form
4. Copy the form endpoint URL
5. Update Contact.js to use Formspree endpoint

## Troubleshooting

**Form not sending:**
- Check browser console for errors
- Verify all three IDs are correct
- Make sure email service is connected in EmailJS dashboard

**Not receiving emails:**
- Check spam folder
- Verify email service connection
- Test with EmailJS dashboard test feature

**Rate limit errors:**
- Free plan has 200 emails/month limit
- Upgrade plan if needed

## After Deployment

The form will work automatically after deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

No additional backend setup required!

---

For more help, visit: https://www.emailjs.com/docs/
