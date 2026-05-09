import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: 'TransferCEA | Compliance Enrollment Services',
  description:
    'We create and maintain compliance accounts on behalf of your licensed staff. Enrollment, compliance identity, and renewal management for healthcare organizations and professional associations.',
  openGraph: {
    title: 'TransferCEA | Compliance Enrollment Services',
    description:
      'We create and maintain compliance accounts on behalf of your licensed staff. Enrollment, compliance identity, and renewal management for healthcare organizations and professional associations.',
    url: 'https://transfercea.cc',
    siteName: 'TransferCEA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TransferCEA | Compliance Enrollment Services',
    description:
      'We create and maintain compliance accounts on behalf of your licensed staff. Enrollment, compliance identity, and renewal management for healthcare organizations and professional associations.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 antialiased">
        {children}
      </body>
    </html>
  )
}
