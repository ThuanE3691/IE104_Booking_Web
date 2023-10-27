import DiscoverSection from "./DiscoverSection";
import SaleSection from "./SaleSection";

const ContentArea = () => {
	return (
		<div className="flex flex-col mt-40 gap-y-10">
			<SaleSection></SaleSection>
			<DiscoverSection></DiscoverSection>
		</div>
	);
};

export default ContentArea;
