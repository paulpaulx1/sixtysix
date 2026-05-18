import { client } from '@/sanity/lib/client'
import ServicesPage from './ServicesPage'

export const metadata = {
  title: 'Higher Education & Workforce Development Services',
  description: '66 Training Services offers workforce development, curriculum design, project management, training delivery, and employer engagement services for California community colleges and government agencies.',
  openGraph: {
    url: 'https://66professionalservices.com/services',
  },
}

export default async function Page() {
  const data = await client.fetch(`*[_type == "servicesPage"][0]`)
  return <ServicesPage data={data} />
}