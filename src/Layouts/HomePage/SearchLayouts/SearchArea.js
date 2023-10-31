import homepage_bg from "@/Assets/Images/villa.jpg";
import SearchBar from "@/Layouts/HomePage/SearchLayouts/SearchBar";

const SearchArea = () => {
	return (
		<div className=" h-[550px] relative mt-6">
			<div
				className="absolute inset-0 z-0 bg-bottom bg-no-repeat bg-cover rounded-2xl brightness-[70%]"
				style={{
					backgroundImage: `url(${homepage_bg})`,
				}}
			></div>
			<div className="absolute z-10 font-semibold text-white select-none font-vietnam-pro inset-y-40 inset-x-16">
				<p className="text-[56px] ">
					Khám phá, <br /> Trải nghiệm
				</p>
				<p className="text-[20px] font-medium ml-3">
					Chọn đúng nơi, trải nghiệm tốt
				</p>
			</div>
			<SearchBar></SearchBar>
		</div>
	);
};

export default SearchArea;
