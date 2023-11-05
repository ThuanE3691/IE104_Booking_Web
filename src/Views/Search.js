import SearchBar from "@/Layouts/Shared/Search/SearchBar";
// import SideBar from "@/Layouts/Shared/Sidebar/Sidebar";
import { useState } from "react";
import FilterModal from "@/Layouts/Shared/Filter/FilterModal";

const Search = () => {
	const styleSearchBar = {
		container: "relative",
		locationTab: {
			yPosition: -125,
			isOnTop: false,
		},
		dateTab: {
			defaultTop: "110%",
			defaultPosition: "left-[370px]",
		},
	};

	const [isShowFilter, setShowFilter] = useState(false);

	return (
		<>
			<div className="flex flex-col w-full min-h-full px-32 py-8 bg-main-bg mb-96">
				<SearchBar overrides={styleSearchBar}></SearchBar>
				{/* <div className="flex mt-8">
					<SideBar></SideBar>
				</div> */}
				<FilterModal
					isShowFilter={isShowFilter}
					setShowFilter={setShowFilter}
				></FilterModal>
				<button onClick={() => setShowFilter(true)}>Show Modal</button>
			</div>
		</>
	);
};

export default Search;
