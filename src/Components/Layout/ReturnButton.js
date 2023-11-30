import { Link } from "react-router-dom";
import { IoIosReturnLeft } from "react-icons/io";

const ReturnButton = ({ path }) => {
	return (
		<Link to={path} className="ml-auto">
			<button className="flex items-center px-4 py-2 font-semibold text-black transition-colors rounded-lg bg-slate-200 hover:bg-button-primary hover:text-white gap-x-1">
				<IoIosReturnLeft size={24}></IoIosReturnLeft>
				Quay lại
			</button>
		</Link>
	);
};

export default ReturnButton;
