import '@/styles/globals.css'
import '@/styles/general.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat(
  { 
    subsets: ['latin'],
    weight: ['400'] 
  }
)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  ) 
}
