import vietnam_provinces from "@/Data/vietnam_provinces_processed.json";
import toLowerCaseNonAccentVietnamese from "./toLowerCaseNonAccentVietnamese";
import capitalizeFirstLetter from "./capitalizeFirstLetter";

const nameProcessing = (name, onlyWarp = false) => {
	let _name = name.replaceAll("Thành phố ", "");
	_name = _name.replaceAll("Tỉnh ", "");
	_name = _name.replaceAll("Huyện ", "");
	_name = _name.replaceAll("Thị xã ", "");

	if (onlyWarp) {
		if (_name.includes(", ")) {
			_name = _name.split(", ")[0];
		}
	}

	return _name;
};

// eslint-disable-next-line no-unused-vars
const tempGetFilterProvinces = (provinces_filter) => {
	const results = [];
	const masks = Array.from({ length: provinces_filter.length }, () => false);
	for (let i = 0; i < vietnam_provinces.length; i++) {
		let name = nameProcessing(vietnam_provinces[i].name);
		const name_no_accent = toLowerCaseNonAccentVietnamese(name)
			.split(" ")
			.map((s) => {
				return capitalizeFirstLetter(s);
			})
			.join("");

		for (let j = 0; j < provinces_filter.length; j++) {
			if (masks[j] || !name_no_accent.includes(provinces_filter[j].name))
				continue;
			masks[j] = true;
			results.push({
				name: name,
				image: provinces_filter[j].image,
				id: i,
			});
		}
	}

	return results;
};

const getFilterProvinces = (provinces_filter) => {
	// const id_results = tempGetFilterProvinces(provinces_filter);
	// console.log(id_results);
	return provinces_filter.map((province) => {
		return {
			name: nameProcessing(vietnam_provinces[province.id].name, true),
			image: province.image,
			id: province.id,
		};
	});
};

export default getFilterProvinces;
