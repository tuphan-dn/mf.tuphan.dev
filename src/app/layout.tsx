import { ReactNode } from 'react'

import CsrProvider from 'providers/csr.provider'

import 'styles/globals.scss'

export const metadata = {
  title: 'mf.tuphan.dev',
  description: 'Tu Phan: Micro Frontend & Module Federation x NextJS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CsrProvider>{children}</CsrProvider>
      </body>
    </html>
  )
}
