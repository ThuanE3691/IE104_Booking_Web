import { IoCloseOutline } from "react-icons/io5";

const FilterOption = ({ children }) => {
	return (
		<div className="flex items-center px-3 py-2 bg-white rounded-md cursor-pointer drop-shadow-md w-fit">
			{children}
			<IoCloseOutline className="ml-2" size={20}></IoCloseOutline>
		</div>
	);
};

const FiltersArea = ({ filters, filtersMethod }) => {
	return (
		<div className="flex items-center gap-3 ml-8 translate-y-8">
			{filters.rating && <FilterOption>{filters.rating} sao</FilterOption>}
			{filters.selected.length > 0 &&
				filters.selected.map((selected) => {
					return <FilterOption>{selected.item.name}</FilterOption>;
				})}
			{filters.selectedServices.length > 0 &&
				filters.selectedServices.map((tag) => {
					return <FilterOption>{tag.name}</FilterOption>;
				})}
		</div>
	);
};

export default FiltersArea;
