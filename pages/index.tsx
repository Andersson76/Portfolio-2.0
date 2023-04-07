import Image from 'next/image'
import { Inter } from 'next/font/google'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Martins Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id='hero'>
        <Hero />

      </section>
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  );
}
