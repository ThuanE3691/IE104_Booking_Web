import homepage_bg from "@SiteAssets/Home/Search/villa.jpg";
import SearchBar from "@/Layouts/Shared/Search/SearchBar";
import { motion } from "framer-motion";

const SearchArea = () => {
	return (
		<div className=" h-[550px] relative mt-6">
			<motion.div
				className="absolute inset-0 z-0 bg-bottom bg-no-repeat bg-cover rounded-2xl brightness-[70%]"
				style={{
					backgroundImage: `url(${homepage_bg})`,
				}}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			></motion.div>
			<div className="absolute z-10 font-semibold text-white select-none font-vietnam-pro inset-y-40 inset-x-16">
				<p className="text-[56px] ">
					Khám phá, <br /> Trải nghiệm
				</p>
				<p className="text-[20px] font-medium ml-3">
					Chọn đúng nơi, trải nghiệm tốt
				</p>
			</div>
			<SearchBar
				overrides={{
					container: "absolute -bottom-16 inset-x-16",
					locationTab: {
						yPosition: 20,
						isOnTop: true,
					},
					dateTab: {
						defaultPosition: "left-[336px]",
						defaultTop: "-350px",
						handleChangeHeight: "-398px",
					},
				}}
			></SearchBar>
		</div>
	);
};

export default SearchArea;
