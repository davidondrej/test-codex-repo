/**
 * location: frontend/pages/_app.tsx
 * Custom App component to load global CSS and initialize Tailwind.
 * This file should only wrap pages with global providers.
 */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
