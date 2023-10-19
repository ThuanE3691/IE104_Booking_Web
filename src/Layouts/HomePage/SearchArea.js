import homepage_bg from "@/Assets/Images/homepage_bg2.jpg";
import homepage_bg2 from "@/Assets/Images/vietnam_crops_fields.jpg";
import SearchBar from "@/Components/SearchBar";

const SearchArea = () => {
	return (
		<div className=" h-[550px] relative mt-8">
			<div
				className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover rounded-2xl"
				style={{ backgroundImage: `url(${homepage_bg2})` }}
			></div>
			<div className="absolute z-10 flex flex-col font-medium text-white select-none font-vietnam-pro inset-y-20 inset-x-16">
				<p className="text-[64px] ">
					Khám phá, <br /> Trải nghiệm
				</p>
				<p className="text-[20px]">Chọn đúng nơi, trải nghiệm tốt</p>
			</div>
			<SearchBar></SearchBar>
		</div>
	);
};

export default SearchArea;
