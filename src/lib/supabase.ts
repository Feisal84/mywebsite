import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

// Create a placeholder client for build-time when env vars might not be available
const createSupabaseClient = (url: string, key: string, options?: any) => {
  if (!url || !key) {
    console.warn('Supabase credentials not found. API calls will fail.')
    // Return a mock client for build time
    return {
      from: () => ({
        insert: () => Promise.reject(new Error('Supabase not configured')),
        select: () => Promise.reject(new Error('Supabase not configured')),
        update: () => Promise.reject(new Error('Supabase not configured')),
        delete: () => Promise.reject(new Error('Supabase not configured')),
      }),
    } as any
  }
  return createClient(url, key, options)
}

export const supabase = createSupabaseClient(supabaseUrl, supabaseAnonKey)

// Server-side client with service role key for admin operations
export const supabaseAdmin = createSupabaseClient(
  supabaseUrl,
  supabaseServiceRoleKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)
