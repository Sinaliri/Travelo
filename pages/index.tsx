import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeroSection from '@/Components/HeroSection/HeroSection'
import AvailableTrips from '@/Components/AvailableTrips/AvailableTrips'
import FeaturesSection from '@/Components/FeaturesSection/FeaturesSection'
import image from '../assets/images/womanAdvertise.png'
import image2 from '../assets/images/womanWithBag.png'
import GallerySection from '@/Components/GallerySection/GallerySection'
import Footer from '@/Components/Footer/Footer'
import { useEffect, useState } from 'react'
import { MainPageTrip } from '@/Context/Services/Functions/Api'

export default function Home() {

  const featureItems = [
    { text: 'save your time!', fontSize: '4xl' },
    { text: 'Choose a trip and Get offers from drivers!', fontSize: 'xl' },
    { text: 'Choose a trip!', fontSize: 'xl' },
    { text: 'Get offers from drivers!', fontSize: 'xl' },
    { text: 'Pick the one you like!', fontSize: 'xl' },
  ];

  const featureItems2 = [
    { text: 'Wanna travel with new friends?', fontSize: '4xl' },
    { text: 'Find your favorite ones!', fontSize: 'xl' },
    { text: 'Send your photos!', fontSize: 'xl' },
    { text: 'Enjoy the moment!', fontSize: 'xl' },
  ];
  const [data, setData] = useState({});
  useEffect(() => {

    const fetchData = async () => {
      const result =await MainPageTrip();
      console.log(result)
      setData(result);
    };

    fetchData();
    // console.log(data.best_driver)
  }, []);
  return (
    <div className='dashboard' style={{ fontFamily: 'Inter' }}>
      <div className='dashboard__heroSection'>
        <HeroSection Driver={data?.best_driver}  />
        
      </div>
      <AvailableTrips Trips={data?.trip_for_now} />
      <FeaturesSection featureItems={featureItems} image={image} link='./availabletrips' />
      <GallerySection />
      <FeaturesSection featureItems={featureItems2} image={image2} link="./people" />
      <Footer />

    </div>
  )
}
