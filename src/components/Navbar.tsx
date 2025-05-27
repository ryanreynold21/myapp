import React from "react";
import { MdOutlineExplore } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
import { MdContactSupport } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
	return (
		<div className=" bg-white hidden lg:block border-b-[1px] border-black">
			<div className=" flex justify-between items-center">
				{/* logo */}
				<div className=" flex">
					<div className=" text-white bg-red-600 py-[14px] px-[20px]">Logo</div>
					<div className=" flex justify-center gap-[20px] items-center px-[20px]">
						{/* explore */}
						<div className=" flex justify-center items-center gap-[4px]">
							<MdOutlineExplore className=" text-red-600" />
							<span className=" text-red-600 text-[16px] font-[600]">
								Explore
							</span>
						</div>
						{/* shop */}
						<div className=" flex justify-center items-center gap-[4px]">
							<AiFillShopping className=" text-red-600" />

							<span className=" text-red-600 text-[16px] font-[600]">Shop</span>
						</div>
						{/* support */}
						<div className=" flex justify-center items-center gap-[4px]">
							<MdContactSupport className=" text-red-600" />

							<span className=" text-red-600 text-[16px] font-[600]">
								Support
							</span>
						</div>
					</div>
				</div>
				{/* search */}
				<div className=" flex justify-center items-center px-[20px] gap-[20px]">
					{/* search input */}
					<div className=" bg-slate-100 rounded-[20px] flex justify-center items-center p-[10px] ">
						<IoIosSearch />
						<span className=" text-slate-600 text-[12px]">Search..</span>
					</div>
					<div className="bg-slate-100 rounded-[20px]  p-[10px]">
						<FaHeart />
					</div>
					<div className="bg-slate-100 rounded-[20px]  p-[10px]">
						<FaShoppingCart />
					</div>
					{/* login */}
					<div className=" flex justify-center gap-[5px] items-center px-[8px] py-[4px] border-2 border-red-600 rounded-full">
						<IoPerson className=" text-red-600" />
						<span className=" text-[14px] text-red-600 font-[500]">
							Login / SignUp
						</span>
					</div>
					<img
						src="https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.webp"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
