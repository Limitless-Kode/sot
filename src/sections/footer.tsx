import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Button, Text } from '@mantine/core';
import IconButton from '../components/icon_button';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer>
				<div className='bg-primary w-[100vw] py-16 text-white flex flex-col items-center justify-center'>
					<h2 className="text-2xl lg:text-3xl font-semibold mb-3">Join us make impact</h2>
					<Text className="text-sm lg:text-lg">Volunteer with us today and build your community </Text>
					<Link href='/contact-us'>
						<Button radius="xl" size="lg" className='mt-8 bg-white text-primary text-xs uppercase hover:bg-secondary'>
							Contact Us
						</Button>
          </Link>
				</div>
				<div className="flex items-center justify-center gap-5 text-white p-8">
					<IconButton
						type="button"
						className={'next h-[45px] w-[45px] text-lg bg-primary'}
						onClick={() => null}
					>
						<FiFacebook />
					</IconButton>
					<IconButton
						type="button"
						className={'next h-[45px] w-[45px] text-lg bg-primary'}
						onClick={() => null}
					>
						<FiInstagram />
					</IconButton>
					<IconButton
						type="button"
						className={'next h-[45px] w-[45px] text-lg bg-primary'}
						onClick={() => null}
					>
						<FiTwitter />
					</IconButton>
				</div>
			</footer>
  )
}

export default Footer