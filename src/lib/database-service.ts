import { Database } from './database.types'
import { supabase } from './supabase'

type ContactSubmission = Database['public']['Tables']['contact_submissions']['Insert']
type NewsletterSubscriber = Database['public']['Tables']['newsletter_subscribers']['Insert']
type ProductInquiry = Database['public']['Tables']['product_inquiries']['Insert']

// Contact Form Submissions
export const contactService = {
  // Submit contact form
  async submitContactForm(data: ContactSubmission) {
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([data])
      .select()
      .single()
    
    if (error) throw error
    return result
  },

  // Get all contact submissions (admin)
  async getAllSubmissions() {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Update submission status
  async updateSubmissionStatus(id: string, status: 'pending' | 'reviewed' | 'resolved') {
    const { data, error } = await supabase
      .from('contact_submissions')
      .update({ status })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  }
}

// Newsletter Subscriptions
export const newsletterService = {
  // Subscribe to newsletter
  async subscribe(email: string, name?: string) {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email, name }])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // Unsubscribe from newsletter
  async unsubscribe(email: string) {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .update({ is_active: false })
      .eq('email', email)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // Get all subscribers (admin)
  async getAllSubscribers() {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('is_active', true)
      .order('subscribed_at', { ascending: false })
    
    if (error) throw error
    return data
  }
}

// Product Inquiries
export const productService = {
  // Submit product inquiry
  async submitInquiry(data: ProductInquiry) {
    const { data: result, error } = await supabase
      .from('product_inquiries')
      .insert([data])
      .select()
      .single()
    
    if (error) throw error
    return result
  },

  // Get all product inquiries (admin)
  async getAllInquiries() {
    const { data, error } = await supabase
      .from('product_inquiries')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Update inquiry status
  async updateInquiryStatus(id: string, status: 'pending' | 'processing' | 'completed') {
    const { data, error } = await supabase
      .from('product_inquiries')
      .update({ status })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  }
}
