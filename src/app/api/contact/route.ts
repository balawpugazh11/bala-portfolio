import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name: _name, email: _email, message: _message } = body

    // Here you would typically:
    // 1. Validate the input
    // 2. Send an email using a service like SendGrid, AWS SES, or similar
    // 3. Store the message in a database if needed

    // For now, we'll just simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate delay

    // Return success response
    return NextResponse.json({ message: 'Message sent successfully' })
  } catch (error) {
    console.error('Error in contact form submission:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
} 