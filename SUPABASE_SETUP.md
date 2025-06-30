# Supabase Database Setup for MyWebsite

This guide will help you set up a Supabase database for your website to store form submissions, newsletter subscriptions, and product inquiries.

## 🚀 Quick Start

### 1. Create a Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for a free account
3. Create a new project

### 2. Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (something like `https://your-project.supabase.co`)
   - **anon/public key** (starts with `eyJ`)
   - **service_role/secret key** (starts with `eyJ`)

### 3. Configure Environment Variables

1. Open your `.env.local` file
2. Replace the placeholder values with your actual Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4. Set Up Database Tables

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `database/schema.sql`
3. Paste and execute the SQL to create your tables

## 📊 Database Schema

### Tables Created:

- **contact_submissions** - Stores contact form submissions
- **newsletter_subscribers** - Stores email subscriptions
- **product_inquiries** - Stores product-related inquiries

### Features:

- ✅ UUID primary keys
- ✅ Timestamps for all records
- ✅ Status tracking for inquiries
- ✅ Row Level Security (RLS) enabled
- ✅ Indexes for better performance
- ✅ Input validation

## 🛠️ API Endpoints

### Contact Form

- **POST** `/api/contact` - Submit contact form
- **GET** `/api/contact` - Get all submissions (admin)

### Newsletter

- **POST** `/api/newsletter` - Subscribe to newsletter
- **GET** `/api/newsletter` - Get all subscribers (admin)

### Product Inquiries

- **POST** `/api/products` - Submit product inquiry
- **GET** `/api/products` - Get all inquiries (admin)

## 📝 Usage Examples

### Contact Form Component

```tsx
import ContactForm from "@/app/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
}
```

### Newsletter Signup

```tsx
import NewsletterSignup from "@/app/components/forms/NewsletterSignup";

export default function HomePage() {
  return (
    <div>
      <NewsletterSignup />
    </div>
  );
}
```

### Direct API Usage

```typescript
// Submit contact form
const response = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
    message: "Hello!",
  }),
});

// Subscribe to newsletter
const response = await fetch("/api/newsletter", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: "user@example.com",
    name: "User Name",
  }),
});
```

## 🔧 Database Service Functions

### Contact Service

- `contactService.submitContactForm(data)` - Submit new contact form
- `contactService.getAllSubmissions()` - Get all submissions
- `contactService.updateSubmissionStatus(id, status)` - Update status

### Newsletter Service

- `newsletterService.subscribe(email, name)` - Subscribe user
- `newsletterService.unsubscribe(email)` - Unsubscribe user
- `newsletterService.getAllSubscribers()` - Get all active subscribers

### Product Service

- `productService.submitInquiry(data)` - Submit product inquiry
- `productService.getAllInquiries()` - Get all inquiries
- `productService.updateInquiryStatus(id, status)` - Update inquiry status

## 🔒 Security Features

- **Row Level Security (RLS)** enabled on all tables
- **Anonymous inserts** allowed for form submissions
- **Input validation** on all API endpoints
- **Email format validation**
- **Error handling** for database operations

## 📊 Admin Dashboard (Optional)

You can create an admin dashboard to view and manage submissions:

1. Create protected routes for admin access
2. Use the GET endpoints to fetch data
3. Display in tables with status management
4. Add authentication/authorization as needed

## 🚨 Next Steps

1. **Set up your Supabase project** using the credentials above
2. **Run the SQL schema** to create your tables
3. **Test the API endpoints** using the provided forms
4. **Customize the forms** to match your website design
5. **Add authentication** if you need admin features

## 💡 Tips

- Monitor your Supabase dashboard for real-time submissions
- Set up email notifications for new form submissions
- Regularly backup your database
- Consider adding rate limiting for production use
- Use the Supabase real-time features for live updates

Your database is now ready to store all your website's input data! 🎉
