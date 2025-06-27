import React from 'react'
import Footer from '@/components/professionalpersonal/Footer';
import Hero from '@/components/professionalpersonal/herosection/Hero';
import ProfileBar from '@/components/professionalpersonal/herosection/ProfileBar';
import StatusBar from '@/components/professionalpersonal/StatusBar';

export default function Personal() {
  return (
    <div className='bg-[#F0F9FF]'>
        <div className='mr-40 ml-40'>
          <Hero/>
          <ProfileBar/>
        </div>
        <div className='mr-40 ml-40 mt-5'>
          <StatusBar/>
        </div>
        <div className='mr-40 ml-40 mt-5'>
            <Footer/>
        </div>
    </div>
  )
}
