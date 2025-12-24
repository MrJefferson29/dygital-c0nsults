# EmailJS Setup Instructions

This contact form uses EmailJS to send emails. Follow these steps to configure it:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier allows 200 emails/month)

## Step 2: Create an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission

From: {{from_name}} ({{from_email}})
WhatsApp: {{whatsapp}}
Interested Field: {{interested_field}}
Literacy Level: {{literacy}}

Reply to: {{reply_to}}
```
service key = service_veuypsd
Template id = template_smcyqom
pub key = xA9iEWfT9dviKx4-9

4. Set the **To Email** field to: `thejefferson29@gmail.com`
5. Note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Copy your **Public Key** (also called API Key)

## Step 5: Configure Environment Variables

Create a `.env` file in the `my-app` directory with:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Restart Your Development Server

After creating the `.env` file, restart your development server:

```bash
npm start
```

## Alternative: Hardcode Values (Not Recommended for Production)

If you prefer not to use environment variables, you can directly update the values in `src/common/utils/useForm.tsx`:

```typescript
const serviceId = "your_service_id_here";
const templateId = "your_template_id_here";
const publicKey = "your_public_key_here";
```

**Note:** Never commit your `.env` file or hardcoded keys to version control!

