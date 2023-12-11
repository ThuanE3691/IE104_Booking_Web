import { createContext, useState } from "react";
import { parseISO } from "date-fns";
import viLocale from "date-fns/locale/vi";

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

	const showOffAll = () => {
		setLocation({ ...location, active: false });
		setSelectedDate({ ...selectedDate, show: false });
		setHotelOptions({ ...hotelOptions, show: false });
	};

	const saveToStorage = () => {
		localStorage.location = JSON.stringify(location);

		localStorage.selectedDate = JSON.stringify(selectedDate);
		localStorage.hotelOptions = JSON.stringify(hotelOptions);
	};

	const loadStorage = () => {
		if (localStorage.getItem("location") !== null) {
			setLocation({ ...JSON.parse(localStorage.location) });

			const local_date = JSON.parse(localStorage.selectedDate);
			local_date.checkIn = parseISO(local_date.checkIn, "dd MMMM, yyyy", {
				locale: viLocale,
			});
			local_date.checkOut = parseISO(local_date.checkOut, "dd MMMM, yyyy", {
				locale: viLocale,
			});
			setSelectedDate(local_date);
			setHotelOptions({ ...JSON.parse(localStorage.hotelOptions) });
		}
	};

	const resetLocalStorage = () => {
		if (localStorage.getItem("location") !== null) {
			localStorage.removeItem("location");
			localStorage.removeItem("selectedDate");
			localStorage.removeItem("hotelOptions");
		}
	};

	const checkFillForm = () => {
		return (
			location.content.length > 0 &&
			selectedDate.checkIn !== null &&
			selectedDate.checkOut !== null
		);
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
		showOffAll,
		checkFillForm,
	};

	return (
		<QueryContext.Provider value={QueryContextData}>
			{children}
		</QueryContext.Provider>
	);
};

export default QueryContextProvider;
