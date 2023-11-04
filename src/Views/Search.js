import SearchBar from "@/Layouts/Shared/Search/SearchBar";

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
		<div className="flex flex-col w-full min-h-full px-32 py-8 bg-main-bg">
			<SearchBar overrides={styleSearchBar}></SearchBar>
		</div>
	);
};

export default Search;
