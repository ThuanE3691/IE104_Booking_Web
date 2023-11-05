import Modal from "@/Components/Feature/Layout/Modal";

const FilterModal = ({ isShowFilter, setShowFilter }) => {
	return (
		<Modal isOpen={isShowFilter}>
			<div className="bg-white ">
				<button onClick={() => setShowFilter(false)}>Close</button>
			</div>
		</Modal>
	);
};

export default FilterModal;
