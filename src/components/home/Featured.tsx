import React from "react";

interface FeaturedProps {}

const Featured: React.FC<FeaturedProps> = ({}) => {
  const featuredItems = [
    {
      id: 1,
      title: "Nintendo Switch",
      category: "Hardware",
      description:
        "A versatile gaming console you can play at home or on the go.",
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2025/ask-the-developer-vol-18-mario-kart-world-part-1/16x9--NSwitch2-ask_the_Dev18-GB-en",
    },
    {
      id: 2,
      title: "Mario Kart 8 Deluxe",
      category: "Software",
      description:
        "Race your friends in the definitive version of this hit game.",

      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2025/ask-the-developer-vol-18-mario-kart-world-part-1/16x9--NSwitch2-ask_the_Dev18-GB-en",
    },
    {
      id: 3,
      title: "Pro Controller",
      category: "Hardware",
      description:
        "Premium wireless controller with HD rumble and motion controls.",

      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2025/ask-the-developer-vol-18-mario-kart-world-part-1/16x9--NSwitch2-ask_the_Dev18-GB-en",
    },
    {
      id: 4,
      title: "Pro Controller",
      category: "Hardware",
      description:
        "Premium wireless controller with HD rumble and motion controls.",

      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2025/ask-the-developer-vol-18-mario-kart-world-part-1/16x9--NSwitch2-ask_the_Dev18-GB-en",
    },
    {
      id: 5,
      title: "Pro Controller",
      category: "Hardware",
      description:
        "Premium wireless controller with HD rumble and motion controls.",

      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2025/ask-the-developer-vol-18-mario-kart-world-part-1/16x9--NSwitch2-ask_the_Dev18-GB-en",
    },
    {
      id: 6,
      title: "Pro Controller",
      category: "Hardware",
      description:
        "Premium wireless controller with HD rumble and motion controls.",

      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2025/ask-the-developer-vol-18-mario-kart-world-part-1/16x9--NSwitch2-ask_the_Dev18-GB-en",
    },
    {
      id: 7,
      title: "Pro Controller",
      category: "Hardware",
      description:
        "Premium wireless controller with HD rumble and motion controls.",

      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2025/ask-the-developer-vol-18-mario-kart-world-part-1/16x9--NSwitch2-ask_the_Dev18-GB-en",
    },
  ];

  return (
    <div className=" p-6">
      <h1 className="text-2xl font-bold mb-4">Featured</h1>

      <div className="overflow-x-auto scrollbar-hidden">
        <div className="flex gap-4 w-max">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="max-w-[250px] bg-white rounded-xl shadow-xl overflow-hidden flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <button className="mt-4 text-sm bg-blue-600 text-[12px] px-2 font-[500] hover:underline self-start rounded-2xl text-white">
                  Learn More
                </button>
                <div>
                  <h2 className="text-md font-semibold mt-1">{item.title}</h2>

                  <span className="text-xs uppercase text-gray-500 flex gap-2 items-center">
                    <span className=" w-[2px] h-[14px] bg-gray-500"></span> {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
