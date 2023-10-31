import Navbar from "@/Layouts/Navbar";
import SearchArea from "@/Layouts/HomePage/SearchLayouts/SearchArea";
import ContentArea from "@/Layouts/HomePage/Content/ContentArea";
import Footer from "@/Layouts/HomePage/Footer";

const HomePage = () => {
	return (
		<div className="flex flex-col w-full min-h-full px-32 py-8 bg-main-bg">
			<Navbar></Navbar>
			<SearchArea></SearchArea>
			<ContentArea></ContentArea>
			<Footer></Footer>
		</div>
	);
};

export default HomePage;
