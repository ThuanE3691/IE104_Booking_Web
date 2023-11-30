import { createContext, useState } from "react";
import generateRandomData from "./../Utils/generateRandomFreq";

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
	const [filters, setFilters] = useState({
		price: {
			min: 0,
			max: null,
		},
		rating: null,
		selected: [],
		selectedServices: [],
	});

	const NUMS_SAMPLE = 3000;
	const MIN_RANGE = 100000;
	const MAX_RANGE = 5000000;
	const BINS = 54;
	const SLIDER = {
		MIN_RANGE: MIN_RANGE,
		MAX_RANGE: MAX_RANGE,
		STEP: Math.round((MAX_RANGE - MIN_RANGE) / BINS),
	};
	// eslint-disable-next-line no-unused-vars
	const [freqPrice, setFreqPrice] = useState(
		generateRandomData(
			NUMS_SAMPLE,
			BINS,
			SLIDER.STEP,
			SLIDER.MIN_RANGE,
			SLIDER.MAX_RANGE
		)
	);

	const setPrice = (type, value) => {
		setFilters((prevState) => {
			const new_filters = { ...prevState };
			new_filters.price = { ...prevState.price };
			new_filters.price[type] = value;

			return new_filters;
		});
	};

	const setRating = (rating) => {
		setFilters((prevState) => {
			const new_filters = { ...prevState };
			new_filters.rating = rating;
			return new_filters;
		});
	};

	const setSelected = (selectItem, index) => {
		setFilters((prevState) => {
			const new_filters = { ...prevState };
			new_filters.selected = [...prevState.selected];

			if (prevState.selected.find((item) => item.id === index)) {
				new_filters.selected = new_filters.selected.filter(
					(item) => item.id !== index
				);
			} else {
				new_filters.selected = [
					...new_filters.selected,
					{
						item: selectItem,
						id: index,
					},
				];
			}

			return new_filters;
		});
	};

	const setSelectedServices = (tag) => {
		setFilters((prevState) => {
			const new_filters = { ...prevState };
			new_filters.selectedServices = [...prevState.selectedServices];

			if (
				new_filters.selectedServices.find(
					(_service) => _service.name === tag.name
				)
			) {
				new_filters.selectedServices = new_filters.selectedServices.filter(
					(_service) => _service.name !== tag.name
				);
			} else {
				new_filters.selectedServices = [...new_filters.selectedServices, tag];
			}

			return new_filters;
		});
	};

	const searchContextData = {
		filters,
		setFilters,
		SLIDER,
		freqPrice,
		filterMethod: {
			setPrice,
			minPrice: "min",
			maxPrice: "max",
			setRating,
			setSelected,
			setSelectedServices,
		},
	};

	return (
		<SearchContext.Provider value={searchContextData}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContextProvider;
