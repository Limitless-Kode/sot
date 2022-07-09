import React, {useState} from 'react'
import Link from 'next/link'
import { Button } from '@mantine/core';
import {RiMenu2Line, RiCloseFill} from 'react-icons/ri';
import SponsorshipModal from './sponsorship_modal';


function Navigation() {
  const [isNavigationOpen, setNavigationOpen] = useState<boolean>(false);
  const [opened, setOpened] = useState(false);

  return (
    <div className='relative w-[80vw] flex justify-between items-center h-24'>
      <Link href='/'><div className="cursor-pointer bg-logo h-[45px] w-[100px] bg-cover" /></Link>
      <RiMenu2Line className='md:hidden' size={22} onClick={()=> setNavigationOpen(true)}/>
      <nav className={`${isNavigationOpen ? 'left-0' : 'left-[100vw]'} md:left-0 ease-in duration-300 flex gap-7 items-center justify-center md:justify-end md:relative fixed  md:flex-row flex-col md:w-[30vw] w-[100vw] md:h-full h-[100vh] top-0  bg-white z-50`}>
        <RiCloseFill className="absolute top-5 right-5 md:hidden" size={45} onClick={()=> setNavigationOpen(false)}/>
        <Link href='/'><div onClick={()=> setNavigationOpen(false)} className="text-2xl md:text-sm cursor-pointer">Home</div></Link>
        <Link href='/about'><div onClick={()=> setNavigationOpen(false)} className="text-2xl md:text-sm cursor-pointer">About</div></Link>
        <Link href='/#gallery'><div onClick={()=> setNavigationOpen(false)} className="text-2xl md:text-sm cursor-pointer">Gallery</div></Link>
        <Button onClick={() => setOpened(true)} radius="xl" size="lg" className='border-primary text-primary text-xs uppercase hover:bg-transparent'>
          Sponsor
        </Button>
      </nav>
      <SponsorshipModal opened={opened} onClose={() => setOpened(false)} />
    </div>
  )
}

export default Navigation