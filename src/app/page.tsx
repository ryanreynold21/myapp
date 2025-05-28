import Banner from "@/components/home/Banner";
import Charactor from "@/components/home/Charactor";
import Featured from "@/components/home/Featured";
import News from "@/components/home/News";
import Seller from "@/components/home/Seller";
import Store from "@/components/home/Store";

// app/page.tsx
export default function Home() {
	return (
		<main className=" bg-white flex flex-col w-screen overflow-hidden">
			<Banner />
			<div className=" w-[90%] my-[30px] flex justify-center items-center bg-slate-300 h-[1px]"></div>
			<Featured />
			<div className=" w-[90%] my-[30px] flex justify-center items-center bg-slate-300 h-[1px]"></div>
			<Store
				imgDesktop="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/merchandising/MNS_desktop_TEST"
				content="Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over."
				imgMobile="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/merchandising/MNS_mobile_TEST"
				title="Online store"
			/>
			<div className=" w-[90%] my-[30px] flex justify-center items-center bg-slate-300 h-[1px]"></div>
			<Store
				imgDesktop="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/merchandising/Gaming%20Systems%20banner/Nintendo%20Switch%202%20features/NCOM-Home-NS2-section-desktop"
				content="Get to know the Nintendo Switch 2 system"
				imgMobile="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/merchandising/Gaming%20Systems%20banner/Nintendo%20Switch%202%20features/NCOM-Home-NS2-section-desktop"
				title="Gaming systems"
			/>
			<div className=" w-[90%] my-[30px] flex justify-center items-center bg-slate-300 h-[1px]"></div>
			<News />
			<div className=" w-[90%] my-[30px] flex justify-center items-center bg-slate-300 h-[1px]"></div>
			<Charactor />
			<div className=" w-[90%] my-[30px] flex justify-center items-center bg-slate-300 h-[1px]"></div>
			<Seller title="Digital new releases" />
			<Seller title="Digital best sellers" />
			<div className=" w-full bg-red-600 h-[100px] flex justify-center items-center text-white">
				logo
			</div>
		</main>
	);
}
