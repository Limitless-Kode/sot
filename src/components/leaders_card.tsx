import React from 'react';
import Image from 'next/image';

interface IReviewCard {
	className?: string;
	name: string;
	position: string;
	photo: string;
}

const LeaderCard = (props: IReviewCard) => {
	const { className, name, position, photo } = props;

	return (
		<div className={`${className} bg-white rounded-xl overflow-hidden`}>
			<div className="relative bg-primary w-full h-[350px]">
				<Image layout="fill" className="object-cover hover:scale-110 cursor-pointer ease-in-out duration-300" src={photo} alt={`Position`} />
			</div>
			<div className="py-5 px-7">
				<h3 className="text-xl font-semibold">{name}</h3>
				<p className="text-primary"> {position}</p>
			</div>
		</div>
	);
};

export default LeaderCard;
