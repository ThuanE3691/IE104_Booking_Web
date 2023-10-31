import DiscoverSection from "./DiscoverSection";
import SaleSection from "./SaleSection";
import TypeSection from "./TypeSection";

const ContentArea = () => {
	return (
		<div className="flex flex-col my-32 gap-y-10">
			<SaleSection></SaleSection>
			<DiscoverSection></DiscoverSection>
			<TypeSection></TypeSection>
		</div>
	);
};

export default ContentArea;
