import { createContext, useState } from "react";

export const QueryContext = createContext();

const QueryContextProvider = ({ children }) => {
	const [location, setLocation] = useState({
		active: false,
		content: "",
	});

	const [selectedDate, setSelectedDate] = useState({
		show: false,
		checkIn: null,
		checkOut: null,
		temp: null,
		order: 1,
	});

	const [hotelOptions, setHotelOptions] = useState({
		show: false,
		adults: 2,
		child: 0,
		room: 1,
	});

	const saveToStorage = () => {
		localStorage.location = JSON.stringify(location);
		localStorage.selectedDate = JSON.stringify(selectedDate);
		localStorage.hotelOptions = JSON.stringify(hotelOptions);
	};

	const loadStorage = () => {
		if (localStorage.getItem("location") !== null) {
			// setLocation({ ...JSON.parse(localStorage.location) });
			// const local_date = JSON.parse(localStorage.selectedDate);
			// setSelectedDate(
			// 	local_date
			// 		? local_date
			// 		: {
			// 				show: false,
			// 				checkIn: null,
			// 				checkOut: null,
			// 				temp: null,
			// 				order: 1,
			// 		  }
			// );
			// setHotelOptions({ ...JSON.parse(localStorage.hotelOptions) });
		}
	};

	const resetLocalStorage = () => {
		if (localStorage.getItem("location") !== null) {
			localStorage.removeItem("location");
			localStorage.removeItem("selectedDate");
			localStorage.removeItem("hotelOptions");
		}
	};

	const QueryContextData = {
		location,
		setLocation,
		selectedDate,
		setSelectedDate,
		hotelOptions,
		setHotelOptions,
		resetLocalStorage,
		saveToStorage,
		loadStorage,
	};

	return (
		<QueryContext.Provider value={QueryContextData}>
			{children}
		</QueryContext.Provider>
	);
};

export default QueryContextProvider;
