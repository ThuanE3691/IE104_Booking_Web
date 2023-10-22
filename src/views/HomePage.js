import Navbar from "@/Layouts/Navbar";
import SearchArea from "@/Layouts/HomePage/SearchLayouts/SearchArea";

const HomePage = () => {
	return (
		<div className="w-full min-h-full px-32 py-8 bg-main-bg">
			<Navbar></Navbar>
			<SearchArea></SearchArea>
		</div>
	);
};

export default HomePage;
