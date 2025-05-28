import React from "react";

interface Character {
	id: number;
	name: string;
	img: string;
}

const mockCharacters: Character[] = [
	{
		id: 1,
		name: "Mario",
		img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Mario",
	},
	{
		id: 2,
		name: "Luigi",
		img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Mario",
	},
	{
		id: 3,
		name: "Peach",
		img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Mario",
	},
	{
		id: 4,
		name: "Yoshi",
		img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Mario",
	},
	{
		id: 5,
		name: "Bowser",
		img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Mario",
	},
	{
		id: 7,
		name: "Bowser",
		img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Mario",
	},
	{
		id: 8,
		name: "Bowser",
		img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Mario",
	},
	{
		id: 6,
		name: "Bowser",
		img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Mario",
	},
];

const Charactor: React.FC = () => {
	return (
		<div className="px-5 lg:px-20 py-10">
			<h2 className="text-2xl lg:text-4xl font-bold mb-6">Characters</h2>
			<div className="grid grid-cols-2 lg:grid-cols-4  gap-2">
				{mockCharacters.map((char) => (
					<div
						key={char.id}
						className="flex flex-col items-center gap-2 p-4 rounded-xl  "
					>
						<div className="bg-lime-200 rounded-md hover:bg-lime-300 transition overflow-hidden">
							<img
								src={char.img}
								alt={char.name}
								className="w-[250px] h-[250px] object-contain hover:scale-110 transition"
							/>
						</div>
						<p className="text-lg font-bold text-center">{char.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Charactor;
