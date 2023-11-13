import React from "react";
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
	});

	const NUMS_SAMPLE = 3000;
	const BINS = 50;
	const SLIDER = {
		MIN_RANGE: 100000,
		MAX_RANGE: 5000000,
		STEP: Math.round(5000000 / BINS),
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
		},
	};

	return (
		<SearchContext.Provider value={searchContextData}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContextProvider;
