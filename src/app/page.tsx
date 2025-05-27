import Banner from "@/components/home/Banner";
import Featured from "@/components/home/Featured";

// app/page.tsx
export default function Home() {
	return (
		<main className=" bg-white flex flex-col w-screen overflow-hidden">
			<Banner />
      <Featured />
		</main>
	);
}
