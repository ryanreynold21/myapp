"use client";

import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineExplore } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
import { MdContactSupport } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const FooterNav: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	return (
		<>
			{/* Bottom Sheet Popup */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className="fixed bottom-0 left-0 w-full h-[80%] bg-white z-30 rounded-t-2xl shadow-lg p-6 flex flex-col"
						initial={{ y: "100%" }}
						animate={{ y: 0 }}
						exit={{ y: "100%" }}
						transition={{ duration: 0.3 }}
					>
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-lg font-bold">Menu</h2>
							<button onClick={toggleMenu} className="text-sm text-gray-500">
								Close
							</button>
						</div>
						<div className=" flex flex-col gap-[20px] py-3">
							{/* explore */}
							<div className=" flex items-center gap-[4px]">
								<MdOutlineExplore className=" text-red-600" />
								<span className=" text-red-600 text-[16px] font-[600]">
									Explore
								</span>
							</div>
							{/* shop */}
							<div className=" flex items-center gap-[4px]">
								<AiFillShopping className=" text-red-600" />

								<span className=" text-red-600 text-[16px] font-[600]">
									Shop
								</span>
							</div>
							{/* support */}
							<div className=" flex items-center gap-[4px]">
								<MdContactSupport className=" text-red-600" />

								<span className=" text-red-600 text-[16px] font-[600]">
									Support
								</span>
							</div>
						</div>
						<ul className="space-y-4 text-lg text-gray-800">
							<li>Home</li>
							<li>Characters</li>
							<li>News</li>
							<li>Shop</li>
							<li>Support</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Footer Navigation */}
			<div className="lg:hidden fixed bottom-4 w-full flex justify-center items-center z-40">
				<div className="flex justify-between items-center footerNav w-[90%] bg-white rounded-full shadow-md px-6 py-3">
					{isMenuOpen ? (
						<IoCloseSharp
							size={30}
							onClick={toggleMenu}
							className="cursor-pointer"
						/>
					) : (
						<TiThMenu
							size={30}
							onClick={toggleMenu}
							className="cursor-pointer"
						/>
					)}
					<FaHeart size={26} className="text-gray-700" />
					<div className="footerNav_search flex justify-center items-center mb-[20px]">
						<IoIosSearch size={40} />
					</div>
					<FaShoppingCart size={26} className="text-gray-700" />
					<IoPerson size={26} className="text-gray-700" />
				</div>
			</div>
		</>
	);
};

export default FooterNav;
