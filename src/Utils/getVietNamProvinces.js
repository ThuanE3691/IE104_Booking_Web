import vietnam_provinces from "@/Data/vietnam_provinces_processed.json";
import toLowerCaseNonAccentVietnamese from "./toLowerCaseNonAccentVietnamese";

const getVietNamProvinces = (query, NUM_LOCATION_DISPLAY) => {
	if (query.length === 0) return [];
	const location_filter = vietnam_provinces.filter((provinces) => {
		return toLowerCaseNonAccentVietnamese(provinces.name).includes(
			toLowerCaseNonAccentVietnamese(query)
		);
	});
	return location_filter.slice(0, NUM_LOCATION_DISPLAY);
};

export default getVietNamProvinces;
