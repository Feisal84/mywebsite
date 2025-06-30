import { newsletterService } from '@/lib/database-service'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
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

    // Subscribe to newsletter
    const subscription = await newsletterService.subscribe(email, name)

    return NextResponse.json({
      message: 'Successfully subscribed to newsletter',
      data: subscription
    }, { status: 201 })

  } catch (error: any) {
    console.error('Newsletter subscription error:', error)
    
    // Handle duplicate email error
    if (error?.code === '23505') {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const subscribers = await newsletterService.getAllSubscribers()
    return NextResponse.json(subscribers)
  } catch (error) {
    console.error('Error fetching newsletter subscribers:', error)
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    )
  }
}
