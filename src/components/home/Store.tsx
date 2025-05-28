import React from "react";

interface StoreProps {
	title: string;
	content: string;
	imgMobile: string;
	imgDesktop: string;
}

const Store: React.FC<StoreProps> = ({
	title,
	imgMobile,
	imgDesktop,
	content,
}) => {
	return (
		<div className="px-[20px] lg:px-[100px] flex flex-col gap-[20px] xl:gap-[30px]">
			<h1 className="text-[22px] font-[800] text-black">{title}</h1>

			{/* Mobile image */}
			<img
				className="rounded-xl w-full h-[150px] block lg:hidden"
				src={imgMobile}
				alt="Mobile"
			/>

			{/* Desktop image */}
			<img
				className="rounded-xl w-full max-h-[400px] hidden lg:block"
				src={imgDesktop}
				alt="Desktop"
			/>

			<div className=" xl:flex gap-2 items-center">
				<p className="text-[18px] font-[600] text-black">{content}</p>
				<button className="bg-red-600 w-full xl:w-[200px] text-white py-4 rounded-md mt-2">
					Learn More
				</button>
			</div>
		</div>
	);
};

export default Store;
