import { Fraunces, DM_Sans } from 'next/font/google'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-fraunces',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${fraunces.variable} ${dmSans.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}