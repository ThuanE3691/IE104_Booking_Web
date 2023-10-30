import vietnam_provinces from "@/Data/vietnam_provinces_processed.json";

const getPopularProvinces = (list_provinces) => {
	const location_filter = list_provinces.map((province) => {
		return vietnam_provinces.find((_province) =>
			_province.name.includes(province)
		);
	});

	return location_filter;
};

export default getPopularProvinces;
