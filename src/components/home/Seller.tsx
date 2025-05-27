import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

interface SellerItem {
  id: number;
  name: string;
  date: string;
  price: string;
  img: string;
}

interface SellerProps {
    title: string;
  }

const mockSellers: SellerItem[] = [
  {
    id: 1,
    name: "The Legend of Zelda: TOTK",
    date: "May 12, 2023",
    price: "$59.99",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a",
  },
  {
    id: 2,
    name: "Mario Kart 8 Deluxe",
    date: "Apr 28, 2017",
    price: "$49.99",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a",
  },
  {
    id: 3,
    name: "Animal Crossing: New ",
    date: "Mar 20, 2020",
    price: "$59.99",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a",
  },
  {
    id: 4,
    name: "Super Mario Odyssey",
    date: "Oct 27, 2017",
    price: "$39.99",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a",
  },
  {
    id: 5,
    name: "Super Mario Odyssey",
    date: "Oct 27, 2017",
    price: "$39.99",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a",
  },
  {
    id: 6,
    name: "Super Mario Odyssey",
    date: "Oct 27, 2017",
    price: "$39.99",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a",
  },
];

const Seller: React.FC<SellerProps> = ({ title }) => {
  return (
    <div className="px-5 lg:px-20 py-10">
      <div className=" flex items-center gap-2">
        <h2 className="text-2xl lg:text-4xl font-bold mb-6">
         {title}
        </h2>
        <button className="self-start mt-2 border-b-2 border-red-600 font-[600] text-red-600 hover:bg-red-700 transition">
          See full list
        </button>
      </div>
      <div className="flex overflow-x-auto gap-6 scrollbar-hidden">
        {mockSellers.map((item) => (
          <div
            key={item.id}
            className="min-w-[220px] flex-shrink-0 bg-white rounded-xl border-[0.5px] border-black"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-[250px] h-[280px] rounded-lg"
            />
            <div className="p-2 ">
              <h3 className="mt-2 font-bold text-[18px]">{item.name}</h3>
              <p className="text-xs text-gray-500">{item.date}</p>
              <p className="mt-1 text-black font-bold text-[17px]">
                {item.price}
              </p>
            </div>
            <div className=" flex justify-between items-center w-full p-2">
              <span className=" flex gap-1 items-center">
                {" "}
                <FaPlus /> Ganes
              </span>
              <FaRegHeart className=" text-red-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seller;
