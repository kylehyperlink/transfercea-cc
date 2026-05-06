import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: 'Continuing Education Authority | CE Analytics & Transfer Services',
  description:
    'Precision analytics and seamless data transfer for continuing education providers and licensing bodies. Compliance reporting built for the modern CE ecosystem.',
  openGraph: {
    title: 'Continuing Education Authority | CE Analytics & Transfer Services',
    description:
      'Precision analytics and seamless data transfer for continuing education providers and licensing bodies.',
    url: 'https://transfercea.cc',
    siteName: 'Continuing Education Authority',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Continuing Education Authority | CE Analytics & Transfer Services',
    description:
      'Precision analytics and seamless data transfer for continuing education providers and licensing bodies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
        {children}
      </body>
    </html>
  )
}
