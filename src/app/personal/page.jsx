import React from 'react'
import Footer from '@/components/professionalpersonal/Footer';
import Hero from '@/components/professionalpersonal/herosection/Hero';
import ProfileBar from '@/components/professionalpersonal/herosection/ProfileBar';
import StatusBar from '@/components/professionalpersonal/StatusBar';
import AccordianSection from '@/components/professionalpersonal/AccordianSection';

export default function Personal() {
  return (
    <div className='bg-[#F0F9FF]'>
        <div className='lg:mr-40 mr-2 lg:ml-40 ml-2'>
          <Hero/>
          <ProfileBar/>
        </div>
        <div className='lg:mr-40 mr-2 lg:ml-40 ml-2 mt-5'>
          <StatusBar/>
        </div>
        <div className='lg:mr-40 mr-2 lg:ml-40 ml-2 mt-5'>
          <AccordianSection/>
        </div>
        <div className='lg:mr-40 mr-2 lg:ml-40 ml-2 mt-5 pb-5'>
            <Footer/>
        </div>
    </div>
  )
}
