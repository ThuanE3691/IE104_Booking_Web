import SearchArea from "@/Layouts/HomePage/SearchLayouts/SearchArea";
import ContentArea from "@/Layouts/HomePage/Content/ContentArea";

const HomePage = () => {
	return (
		<div className="flex flex-col w-full min-h-full px-32 bg-main-bg">
			<SearchArea></SearchArea>
			<ContentArea></ContentArea>
		</div>
	);
};

export default HomePage;
