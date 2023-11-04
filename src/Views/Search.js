import SearchBar from "@/Layouts/Shared/Search/SearchBar";
import SideBar from "@/Layouts/Shared/Sidebar/Sidebar";

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

	return (
		<div className="flex flex-col w-full min-h-full px-32 py-8 bg-main-bg mb-96">
			<SearchBar overrides={styleSearchBar}></SearchBar>
			{/* <div className="flex mt-8">
				<SideBar></SideBar>
			</div> */}
		</div>
	);
};

export default Search;
