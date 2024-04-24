import { EmailRequest } from '@/types/email'
import emailjs from '@emailjs/browser'

export async function sendEmail(request: EmailRequest, templateId: string) {
  request = Object.assign(request, {
    from_name: process.env.NEXT_PUBLIC_EMAIL_SENDER,
    to_name: process.env.NEXT_PUBLIC_EMAIL_RECEIVER
  })

  const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string

  try {
    const response = await emailjs.send(serviceId,
      templateId,
      request, {
        publicKey: publicKey,
        blockList: {},
        limitRate: {
          throttle: 0 // turn off the limit rate for these requests
        }
      }
    )
    return response
  } catch (error) {
    throw error
  }
}