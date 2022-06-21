import React from 'react';
import Image from 'next/image';
import { Button } from '@mantine/core';
import Link from 'next/link';

interface INewsCard {
	className?: string;
	name: string;
	url: string;
	photo: string;
}

const NewsCard = (props: INewsCard) => {
	const { className, name, url, photo } = props;

	return (
		<div className={`${className} bg-white rounded-xl overflow-hidden`}>
			<div className="relative bg-primary w-full h-[250px]">
				<Image layout="fill" className="object-cover hover:scale-110 cursor-pointer ease-in-out duration-300" src={photo} alt={`Poster`} />
			</div>
			<div className="py-5">
        <h3 className="text-lg font-semibold mb-5">{name}</h3>
        {/* <a href={url} target="_blank" rel="noopener noreferrer" className='inline-block mt-5 text-primary'>Read More</a> */}
        <Link href={url} >
          <a target="_blank" rel="noopener noreferrer">
            <Button
              radius="xl"
              size="lg"
              className="border-primary text-primary text-xs uppercase hover:bg-transparent"
            >
              Read More
            </Button>
          </a>
        </Link>
			</div>
		</div>
	);
};

export default NewsCard;
