// Database Types
export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          message: string
          phone?: string
          subject?: string
          created_at: string
          status: 'pending' | 'reviewed' | 'resolved'
        }
        Insert: {
          id?: string
          name: string
          email: string
          message: string
          phone?: string
          subject?: string
          created_at?: string
          status?: 'pending' | 'reviewed' | 'resolved'
        }
        Update: {
          id?: string
          name?: string
          email?: string
          message?: string
          phone?: string
          subject?: string
          created_at?: string
          status?: 'pending' | 'reviewed' | 'resolved'
        }
      }
      newsletter_subscribers: {
        Row: {
          id: string
          email: string
          name?: string
          subscribed_at: string
          is_active: boolean
        }
        Insert: {
          id?: string
          email: string
          name?: string
          subscribed_at?: string
          is_active?: boolean
        }
        Update: {
          id?: string
          email?: string
          name?: string
          subscribed_at?: string
          is_active?: boolean
        }
      }
      product_inquiries: {
        Row: {
          id: string
          name: string
          email: string
          product_name: string
          quantity?: number
          message?: string
          created_at: string
          status: 'pending' | 'processing' | 'completed'
        }
        Insert: {
          id?: string
          name: string
          email: string
          product_name: string
          quantity?: number
          message?: string
          created_at?: string
          status?: 'pending' | 'processing' | 'completed'
        }
        Update: {
          id?: string
          name?: string
          email?: string
          product_name?: string
          quantity?: number
          message?: string
          created_at?: string
          status?: 'pending' | 'processing' | 'completed'
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
