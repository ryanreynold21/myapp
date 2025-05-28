"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";

const slides = [
	{ id: 1, bgColor: "bg-blue-500", dotColor: "bg-blue-500" },
	{ id: 2, bgColor: "bg-red-500", dotColor: "bg-red-500" },
	{ id: 3, bgColor: "bg-slate-500", dotColor: "bg-slate-500" },
	{ id: 4, bgColor: "bg-orange-500", dotColor: "bg-orange-500" },
];

const Banner: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef<any>(null);

	const handleDotClick = (index: number) => {
		swiperRef.current?.slideToLoop(index);
	};

	return (
		<>
			<div
				className={`relative w-screen flex flex-col justify-center items-center ${slides[activeIndex].bgColor} transition-colors duration-500`}
			>
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					loop={true}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
					modules={[Autoplay]}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
					onSlideChange={(swiper) => {
						setActiveIndex(swiper.realIndex);
					}}
				>
					{slides.map((slide) => (
						<SwiperSlide key={slide.id}>
							<div className="w-screen h-[400px]" />
						</SwiperSlide>
					))}
				</Swiper>

				{/* Custom Dots */}
			</div>
			<ul className="flex justify-center items-center gap-[10px] my-[20px] w-full z-10">
				{slides.map((slide, i) => (
					<li
						key={i}
						className={`w-10 h-10 rounded-md cursor-pointer transition-all duration-300
              ${activeIndex === i ? slide.dotColor : "bg-gray-300"}`}
						onClick={() => handleDotClick(i)}
					></li>
				))}
			</ul>
		</>
	);
};

export default Banner;
