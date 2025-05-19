/**
 * location: frontend/pages/index.tsx
 * Home page showing a Lucide icon and simple Supabase call placeholder.
 * This page is only a basic example.
 */
import { useEffect } from 'react'
import { supabase } from '@/utils/supabaseClient'
import { Rocket } from 'lucide-react'


export default function Home() {
  useEffect(() => {
    // simple example fetching data from Supabase
    supabase.from('test').select('*').then(console.log)
  }, [])

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <Rocket className="w-12 h-12 mx-auto" />
        <h1 className="text-2xl">Welcome to Vectal</h1>
      </div>
    </main>
  )
}
