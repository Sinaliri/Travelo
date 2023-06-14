import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeroSection from '@/Components/HeroSection/HeroSection'

export default function Home() {
  return (
    <div className='dashboard'>

      <div className='dashboard__heroSection'>
        <HeroSection />
      </div>

    </div>
  )
}
