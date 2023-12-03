import SearchArea from "@/Layouts/Site/Home/Search/SearchArea";
import ContentArea from "@/Layouts/Site/Home/Content/ContentArea";
import { QueryContext } from "@/Context/QueryContext";
import { useContext, useEffect } from "react";

const Home = () => {
	const { resetLocalStorage } = useContext(QueryContext);

	useEffect(() => {
		resetLocalStorage();
	}, []);

	return (
		<div className="flex flex-col w-full min-h-full px-32 bg-main-bg">
			<SearchArea></SearchArea>
			<ContentArea></ContentArea>
		</div>
	);
};

export default Home;
