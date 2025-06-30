import { productService } from '@/lib/database-service'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json(
        { error: 'Database not configured. Please set up Supabase environment variables.' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { name, email, product_name, quantity, message } = body

    // Validate required fields
    if (!name || !email || !product_name) {
      return NextResponse.json(
        { error: 'Name, email, and product name are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Submit product inquiry
    const inquiry = await productService.submitInquiry({
      name,
      email,
      product_name,
      quantity,
      message,
      status: 'pending'
    })

    return NextResponse.json({
      message: 'Product inquiry submitted successfully',
      data: inquiry
    }, { status: 201 })

  } catch (error) {
    console.error('Product inquiry submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit product inquiry' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json(
        { error: 'Database not configured. Please set up Supabase environment variables.' },
        { status: 503 }
      )
    }

    const inquiries = await productService.getAllInquiries()
    return NextResponse.json(inquiries)
  } catch (error) {
    console.error('Error fetching product inquiries:', error)
    return NextResponse.json(
      { error: 'Failed to fetch inquiries' },
      { status: 500 }
    )
  }
}
