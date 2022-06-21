import React, {useEffect, useState} from 'react'
import { Button, Text } from '@mantine/core';
import { Navigation, Autoplay, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import IconButton from '../../src/components/icon_button'
import Image  from 'next/image';

import 'swiper/css';
import "swiper/css/grid";

interface IGrid{
  rows: number,
  columns: number
}

interface IImage{
  name: string,
  photo: string
}

interface IGallery{
  grid: IGrid,
  images: Array<IImage>
}

const Gallery = (props: IGallery) => {
  const {grid, images} = props;
  const [gallery, setGallery] = useState<Array<Array<IImage>>>();

  const groupImages = () => {
    const number_of_images_per_grid = grid.rows * grid.columns; 
    if (images.length <= number_of_images_per_grid) {
      setGallery([images]);
      return;
    }
    const number_of_groups = (Math.ceil(images.length / number_of_images_per_grid));

    const temp = gallery || [];
    for (let index = 1; index <= number_of_groups; index++) {
      const current_index = index == 1 ? 0 : number_of_images_per_grid * (index - 1);
      temp.push(images.slice( (current_index), (number_of_images_per_grid * index)));
    }
    setGallery(temp);
  }

  useEffect(() => {
    groupImages()
  },[])

  return (
    <div id="gallery" className="flex items-center justify-center min-h-[100vh] w-[100vw] py-32">
      <div className="w-[80vw]">
        <div className='w-full lg:w-[30vw] mb-12'>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">Have a look at what we created.</h2>
          <Text className="text-sm lg:text-lg leading-5 font-normal">
            These groups, companies and organizations have played a major role in our journey so far.
          </Text>
        </div>
        <div className='mb-16 w-full'>
          <Swiper
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            modules={[Autoplay, Navigation, Grid]}
            spaceBetween={10}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={{
              nextEl: '.gallery_next',
              prevEl: '.gallery_prev'
            }}
          >
            {gallery?.map((images, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-wrap gap-6 w-full h-auto'>
                  {
                    images.map((image, index) => (
                      <div className="relative w-[35vw] h-[35vw] lg:w-[18vw] lg:h-[18vw] xl:w-[15vw] xl:h-[15vw] rounded-xl oveflow-hidden" key={index}>
                        <Image layout="fill" className='object-cover hover:scale-110 cursor-pointer ease-in-out duration-300 rounded-xl' src={image.photo} alt={image.name} />
                      </div>
                    ))
                  }
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-white flex gap-4 items-center">
          <IconButton
            type="button"
            className={'gallery_prev h-[45px] w-[45px] text-lg bg-primary'}
            onClick={() => null}
          >
            <FiArrowLeft />
          </IconButton>
          <IconButton
            type="button"
            className={'gallery_next h-[45px] w-[45px] text-lg bg-primary'}
            onClick={() => null}
          >
            <FiArrowRight />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Gallery
