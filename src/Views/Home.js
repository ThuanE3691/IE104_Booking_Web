import SearchArea from "@/Layouts/Site/Home/Search/SearchArea";
import ContentArea from "@/Layouts/Site/Home/Content/ContentArea";

const Home = () => {
	return (
		<div className="flex flex-col w-full min-h-full px-32 bg-main-bg">
			<SearchArea></SearchArea>
			<ContentArea></ContentArea>
		</div>
	);
};

export default Home;
