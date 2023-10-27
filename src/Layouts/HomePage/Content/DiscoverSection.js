import { ProvinceCard } from "@/Components/Content/ProvinceCard";

const DiscoverSection = () => {
	return (
		<div className=" font-vietnam-pro">
			<h3 className=" content-header">Khám phá Việt Nam</h3>
			<div className="grid grid-cols-3 gap-8 mt-4">
				<ProvinceCard></ProvinceCard>
				<ProvinceCard></ProvinceCard>
				<ProvinceCard></ProvinceCard>
			</div>
		</div>
	);
};

export default DiscoverSection;
