const changeLocationName = (location, isLocationObject = 1) => {
	var name_location;
	if (isLocationObject) name_location = location.name.replace("Tỉnh ", "");
	else name_location = location.replace("Tỉnh ", "");
	name_location = name_location.replace("Thành phố ", "");
	name_location = name_location.replace("Huyện ", "");
	name_location = name_location.replace("Thị xã ", "");
	return name_location;
};

export default changeLocationName;
