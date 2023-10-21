const changeLocationName = (location) => {
	var name_location = location.name.replace("Tỉnh ", "");
	name_location = name_location.replace("Thành phố ", "");
	name_location = name_location.replace("Huyện ", "");
	name_location = name_location.replace("Thị xã ", "");
	return name_location;
};

export default changeLocationName;
