import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Nav from '../src/components/navigation';
import styles from '../styles/Home.module.css';
import Jumbotron from '../src/sections/jumbotron';
import Footer from '../src/sections/footer'
import { Button, Text } from '@mantine/core';
import Link from 'next/link';
import leaders from '../src/data/leaders';
import events from '../src/data/events';
import news from '../src/data/news';
import partners from '../src/data/partners';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import LeaderCard from '../src/components/leaders_card';
import { FiArrowLeft, FiArrowRight, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Gallery from '../src/sections/gallery';

// Import Swiper styles
import 'swiper/css';
// import "swiper/css/grid";


import IconButton from '../src/components/icon_button';
import images from '../src/data/images';
import NewsCard from '../src/components/news_card';

SwiperCore.use([ Navigation ]);
const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>School Of Thoughts Ghana</title>
				<meta name="description" content="School of Thoughts Ghana is an award-winning registered Non-profit organization that is designed to bridge the
							educational gap between the Northern and Southern parts of Ghana through Human Capacity
							Development, Advocacy and Opportunity Creation. It focuses on the tuition of activities such
							as Reading and Writing, Debate and Public Speaking, Talent and Leadership Development, and
							Information Technology." />
				<meta property="og:image" content="https://www.sotgh.org/assets/images/hero.jpg" />
				<meta property="og:image:type" content="image/jpeg" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Nav />
				<Jumbotron />

				<section className="flex items-center justify-between py-16 w-[80vw]">
					<div className="lg:block hidden bg-about-image w-[35vw] h-[30vw] bg-cover bg-center rounded-3xl" />
					<div className="w-[80vw] lg:w-[30vw]">
						<h2 className="text-2xl lg:text-3xl font-semibold mb-7">An award-winning registered Non-profit organization.</h2>
						<Text className="text-sm lg:text-lg leading-5 font-normal">
							We are an award-winning registered Non-profit organization that is designed to bridge the
							educational gap between the Northern and Southern parts of Ghana through Human Capacity
							Development, Advocacy and Opportunity Creation. It focuses on the tuition of activities such
							as Reading and Writing, Debate and Public Speaking, Talent and Leadership Development, and
							Information Technology.{' '}
						</Text>

						<div className="mt-8">
							<Link href="/about">
								<Button
									radius="xl"
									size="lg"
									className="border-primary text-primary text-xs uppercase hover:bg-transparent"
								>
									Read More
								</Button>
							</Link>
						</div>
					</div>
				</section>

				<section className="w-[100vw] py-[45px] xl:py-[90px] flex flex-col justify-center items-center bg-gray">
					<div className="w-[80vw]">
						<div className="pb-3 xl:flex justify-between items-center xl:pb-5">
							<h2 className="text-2xl lg:text-3xl font-semibold">Leadership Structure</h2>
						</div>

						<Swiper
							loop={true}
							centeredSlides={true}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							modules={[Autoplay, Navigation]}
							spaceBetween={50}
							slidesPerView={1}
							onSwiper={(swiper) => console.log(swiper)}
							breakpoints={{
								640: {
									slidesPerView: 2,
									spaceBetween: 30
								},
								768: {
									slidesPerView: 3
								},
								1280: {
									slidesPerView: 4
								}
							}}
						>
							{leaders.map((leader, index) => (
								<SwiperSlide key={index}>
									<LeaderCard
										className="mt-8 w-[80vw] sm:w-[40vw] md:w-[23vw] xl:w-[17vw]"
										name={leader.name}
										position={leader.position}
										photo={leader.photo}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</section>

				<section>
					<div className="relative w-[100vw] h-[100vh] bg-gradient-to-r from-primary to-secondary flex justify-center items-center">
						<div className="w-[80vw] lg:w-[30vw] text-white z-[2]">
							<h2 className="text-2xl lg:text-3xl font-semibold mb-7">What problem are we solving?</h2>
							<Text className="text-sm lg:text-lg leading-5">
								In a survey that was conducted in 2019 by UNICEF Ghana to assess the state of education
								in the Northern part of Ghana, it was revealed that only 3 out of 10 random students
								could fluently read, fully understand what they have read and clearly write for one to
								read.This made it difficult for students to compete with their colleagues in the
								Southern sector in National examinations such as the Basic School Certificate
								Examination.Students, teachers and parents have low or no motivation to pursue
								education. The lack of a consistent and organized group to address the issue of quality
								education delivery in the region keeps frustrating all government efforts at solving the
								problem.The ripple effect of this anomaly is the increase in school dropouts,
								rural-urban migration and increased rates of fraudulent activities by young people.
							</Text>
							<div className="mt-8 flex gap-4">
								<Button
									radius="xl"
									size="xl"
									className="border-white text-xs uppercase hover:bg-primary"
								>
									Join Us Today
								</Button>
							</div>
						</div>
						<div className="lg:block hidden w-[40vw]" />
						<div className="lg:block hidden absolute bg-hero-image bg-cover bg-center scale-x-[-1] w-[40vw] h-[80vh] rounded-tr-[245px] bottom-0 right-0" />
					</div>
				</section>

				<section className="w-[100vw] py-[45px] xl:py-[90px] flex flex-col justify-center items-center">
					<div className="w-[80vw]">
						<div className="mb-12">
							<h2 className="text-2xl lg:text-3xl font-semibold mb-3">Partners</h2>
							<Text className="text-sm lg:text-lg">These groups, companies and organizations have played a major role in our journey so far.</Text>
						</div>

						<Swiper
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							modules={[Autoplay, Navigation]}
							spaceBetween={0}
							slidesPerView={3}
							onSwiper={(swiper) => console.log(swiper)}
							breakpoints={{
								768: {
									slidesPerView: 3
								},
								1280: {
									slidesPerView: 6
								}
							}}
						>
							{partners.map((partner, index) => (
								<SwiperSlide key={index}>
									<div className="relative w-[60px] h-[60px]">
										<Image layout="fill" src={partner.photo} alt={partner.name} />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</section>

				<section className="w-[100vw] py-[45px] xl:py-[90px] flex flex-col justify-center items-center">
					<div className="w-[80vw]">
						<div className="mb-12">
							<h2 className="text-2xl lg:text-3xl font-semibold mb-3">Featured</h2>
							<Text className="text-sm lg:text-lg ">Our impact has been featured on several media platforms.</Text>
						</div>

						<Swiper
							loop={true}
							centeredSlides={true}
							autoplay={{
								delay: 3500,
								disableOnInteraction: false,
							}}
							modules={[Autoplay, Navigation]}
							spaceBetween={50}
							slidesPerView={1}
							onSwiper={(swiper) => console.log(swiper)}
							breakpoints={{
								640: {
									slidesPerView: 2,
								},
								768: {
									slidesPerView: 3
								},
								1280: {
									slidesPerView: 4
								}
							}}
						>
							{news.map((list, index) => (
								<SwiperSlide key={index}>
									<NewsCard
										className="mt-8 w-[80vw] sm:w-[40vw] md:w-[23vw] xl:w-[17vw]"
										name={list.title}
										url={list.link}
										photo={list.poster}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</section>

				<section>
					<div className="relative w-[100vw] h-full py-32 bg-gradient-to-b from-primary to-secondary flex justify-center items-center">
						<div className="w-[80vw] lg:w-[30vw] overflow-hidden text-white z-[2]">
							<h2 className="text-2xl lg:text-3xl font-semibold">Events</h2>
							<Text className="text-sm lg:text-lg leading-5">
								These groups, companies and organizations have played a major role in our journey so
								far.
							</Text>
							<div className="mt-12 w-[80vw] lg:w-[30vw]">
								<div>
									<Swiper
									autoplay={{
										delay: 5000,
										disableOnInteraction: false,
									}}
									modules={[Autoplay, Navigation]}
									spaceBetween={10}
									onSwiper={(swiper) => console.log(swiper)}
									navigation={{
										nextEl: '.next',
										prevEl: '.prev'
									}}
								>
									{events.map((event, index) => (
										<SwiperSlide key={index}>
											<div className="w-[80vw] lg:w-[30vw]">
												<h3 className="text-lg lg:text-xl font-bold mb-3 uppercase">{event.title}</h3>
												<Text className="text-sm lg:text-lg">{event.description}</Text>
											</div>
										</SwiperSlide>
									))}
								</Swiper>
								</div>
								<div className="text-white flex gap-4 items-center mt-3">
									<IconButton
										type="button"
										className={'prev h-[45px] w-[45px] text-lg bg-primary'}
										onClick={() => null}
									>
										<FiArrowLeft />
									</IconButton>
									<IconButton
										type="button"
										className={'next h-[45px] w-[45px] text-lg bg-primary'}
										onClick={() => null}
									>
										<FiArrowRight />
									</IconButton>
								</div>
							</div>
						</div>
						<div className="lg:block hidden w-[40vw]" />
						<div className="lg:block hidden absolute bg-hero-image bg-cover bg-center scale-x-[-1] w-[50vw] h-full bottom-0 right-0" />
					</div>
				</section>

				<section>
					<Gallery grid={{rows: 2, columns: 5}} images={images}  />	
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Home;
