import { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../src/components/navigation';
import styles from '../styles/Home.module.css';
import { Text } from '@mantine/core';
import SwiperCore, { Navigation} from 'swiper';
import Circle from '../src/components/circle';
import Footer from '../src/sections/footer'

// Import Swiper styles
import 'swiper/css';
// import "swiper/css/grid";



SwiperCore.use([ Navigation ]);
const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>About Us</title>
				<meta name="description" content="We are an award-winning registered Non-profit organization that is designed to bridge the
							educational gap between the Northern and Southern parts of Ghana through Human Capacity
							Development, Advocacy and Opportunity Creation. It focuses on the tuition of activities such
							as Reading and Writing, Debate and Public Speaking, Talent and Leadership Development, and
							Information Technology." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Nav />
        <div className="relative h-[40vh] xl:h-[50vh] w-[100vw] py-16 bg-gradient-to-r from-primary to-secondary flex justify-center items-center">
          <Circle className="absolute w-[40vw] h-[40vw] md:h-[20vw] md:w-[20vw] rounded-full md:left-[-10vw] left-[-20vw]" />

          <div className='w-[80vw] text-white z-[2]'>
            <h1 className='text-2xl lg:text-4xl mb-7'>About Us</h1>
            <Text className='text-sm leading-5'></Text>
          </div>
          <div className='w-[40vw] hidden' />
          <div className="absolute bg-hero-image bg-cover bg-center scale-x-[-1] w-[40vw] h-[80vh] rounded-tr-[245px] bottom-0 right-0 hidden"></div>
        </div>
        <div className='w-[80vw] py-16'>
          <Text className='text-sm lg:text-lg leading-5'>School of Thoughts Ghana is an award-winning registered Non-profit organization that is designed to bridge
            the educational gap between the Northern and Southern parts of Ghana through Human Capacity Development, Advocacy and Opportunity Creation. 
            It focuses on the tuition of activities such as Reading and Writing, Debate and Public Speaking, Talent and Leadership Development,
            and Information Technology. Under its Advocacy strand, it pushes for the implementation of policies that would improve the education 
            conditions and opportunities in Northern Ghana. Its Opportunity Creation strand affords young people from the North an opportunity to enjoy 
            the events, programs, scholarships and trainings that are hitherto concentrated in the Capital regions of the country. 
          </Text>
        </div>

        <section className='w-[80vw] pb-16 md:flex gap-8 md:mt-8'>
          <div className='mb-8'>
            <h2 className='text-2xl lg:text-4xl font-semibold mb-5 text-primary'>Vision</h2>
            <Text className='text-sm lg:text-lg leading-5'>
              To be the hub for the formulation and implementation of activities geared towards the achievement of Sustainable Development Goal 4, Quality Education first, 
              in Northern Ghana and then other deprived regions.  
            </Text>
          </div>
          <div>
            <h2 className='text-2xl lg:text-4xl font-semibold mb-5 text-primary'>Mission</h2>
            <Text className='text-sm lg:text-lg leading-5'>
              To train and raise socially responsible young leaders who would understand the value of Quality Education and the tenets of Global citizenship 
            </Text>
          </div>
        </section>
			</main>

			<Footer />
		</div>
	);
};

export default Home;
