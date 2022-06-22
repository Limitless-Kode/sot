import React from 'react'
import { Button, Text } from '@mantine/core';
import Circle from '../components/circle';
import Link from 'next/link';

function Jumbotron() {
  return (
    <div className="relative w-[100vw] h-[100vh] bg-gradient-to-r from-primary to-secondary flex justify-center items-center">
      {/* <div className='absolute w-full h-full bg-gradient-to-r from-primary to-secondary' /> */}
      <Circle className="absolute w-[40vw] h-[40vw] rounded-full left-[-20vw]" />

      <div className='w-[80vw] lg:w-[30vw] text-white z-[2]'>
        <h1 className='text-2xl lg:text-4xl font-semibold mb-7'>The Best Human Capacity Development, Advocacy and Opportunity Creators</h1>
        <Text className='text-sm lg:text-lg leading-5'>We are an award-winning registered Non-profit organization that is designed to bridge the educational
          gap between the Northern and Southern parts of Ghana through Human Capacity Development,  Advocacy and Opportunity Creation.</Text>
        <div className='mt-8 flex gap-4'>
          <Button radius="xl" size="lg" className='bg-secondary text-xs uppercase hover:bg-secondary'>
            Sponsor
          </Button>
          <Link href='/contact-us'>
            <Button radius="xl" size="lg" className='border-white text-xs uppercase hover:bg-primary'>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <div className='w-[40vw] hidden lg:block' />
      <div className="absolute bg-hero-image bg-cover bg-center scale-x-[-1] w-[40vw] h-[80vh] rounded-tr-[245px] bottom-0 right-0 hidden lg:block"></div>
    </div>
  )
}

export default Jumbotron