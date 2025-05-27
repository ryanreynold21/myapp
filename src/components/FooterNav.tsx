import React from "react";
import { TiThMenu } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";


interface FooterNavProps {}

const FooterNav: React.FC<FooterNavProps> = ({}) => {
  return (
    <div className="  lg:hidden flex justify-center items-center">
      <div className=" fixed flex justify-between items-center bottom-4 footerNav px-[40px]">
        <TiThMenu size={30} />
        <FaHeart size={30} />
        <div className="footerNav_search flex justify-center items-center mb-[20px]">
            <IoIosSearch size={40} />
        </div>
        <FaShoppingCart size={30} />
        <IoPerson size={30} />
      </div>
    </div>
  );
};

export default FooterNav;
