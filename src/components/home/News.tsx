import React from "react";
import { PiArticleLight } from "react-icons/pi";

interface NewsItem {
  id: number;
  img: string;
  date: string;
  title: string;
  desc: string;
}

const mockNews: NewsItem[] = [
  {
    id: 1,
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_600/ncom/en_US/articles/2025/competition-is-on-now-in-nintendo-world-championships-nes-edition/1920x1080_NWC_NES_CC_until_20250602_wk46",
    date: "May 25, 2025",
    title: "Mario Day Celebration Announced!",
    desc: "Join the fun with new games, discounts, and events across all Mario titles this month.",
  },
  {
    id: 2,
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_600/ncom/en_US/articles/2025/competition-is-on-now-in-nintendo-world-championships-nes-edition/1920x1080_NWC_NES_CC_until_20250602_wk46",
    date: "May 20, 2025",
    title: "New Nintendo Switch Title Released",
    desc: "A brand-new adventure game hits the eShop with updated graphics and co-op play.",
  },
  {
    id: 3,
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_600/ncom/en_US/articles/2025/competition-is-on-now-in-nintendo-world-championships-nes-edition/1920x1080_NWC_NES_CC_until_20250602_wk46",
    date: "May 18, 2025",
    title: "Next Nintendo Direct Coming Soon",
    desc: "Tune in for exciting announcements, new trailers, and surprise reveals!",
  },
  {
    id: 4,
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_600/ncom/en_US/articles/2025/competition-is-on-now-in-nintendo-world-championships-nes-edition/1920x1080_NWC_NES_CC_until_20250602_wk46",
    date: "May 18, 2025",
    title: "Next Nintendo Direct Coming Soon",
    desc: "Tune in for exciting announcements, new trailers, and surprise reveals!",
  },
];

const News: React.FC = () => {
  return (
    <div className="px-5 lg:px-20 py-10">
      <h2 className="text-2xl lg:text-4xl font-bold mb-6">News</h2>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
        {mockNews.map((news) => (
          <div key={news.id} className="bg-white rounded-xl  overflow-hidden">
            <img
              src={news.img}
              alt={news.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <p className="text-sm text-gray-500">{news.date}</p>
              <h3 className="text-lg font-bold">{news.title}</h3>
              <p className="text-gray-600">{news.desc}</p>
              <button className="self-start mt-2 border-b-2 border-red-600 text-red-600 hover:bg-red-700 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-red-600 w-full flex justify-center items-center gap-[2px] px-2 xl:w-[250px] text-white py-4 rounded-md mt-2">
        <PiArticleLight />
        See More in News Article
      </button>
    </div>
  );
};

export default News;
