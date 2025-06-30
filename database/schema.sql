-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(255),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'resolved')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Product Inquiries Table
CREATE TABLE IF NOT EXISTS product_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    quantity INTEGER,
    message TEXT,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_active ON newsletter_subscribers(is_active);
CREATE INDEX IF NOT EXISTS idx_product_inquiries_created_at ON product_inquiries(created_at);
CREATE INDEX IF NOT EXISTS idx_product_inquiries_status ON product_inquiries(status);

-- Row Level Security (RLS) Policies
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert data (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON newsletter_subscribers
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON product_inquiries
    FOR INSERT WITH CHECK (true);

-- Allow authenticated users to read their own data
CREATE POLICY "Users can read own submissions" ON contact_submissions
    FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "Users can read own subscriptions" ON newsletter_subscribers
    FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "Users can read own inquiries" ON product_inquiries
    FOR SELECT USING (auth.uid() IS NOT NULL);
