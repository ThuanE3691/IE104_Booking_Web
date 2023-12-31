import { FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

const InformationPanel = ({ information }) => {
	const informationRender = [
		{
			icon: (className) => <FaUser className={className} />,
			value: information.lastName + " " + information.firstName,
		},
		{
			icon: (className) => <HiOutlineMail className={className} size={20} />,
			value: information.email,
		},
		{
			icon: (className) => (
				<BsFillTelephoneFill className={className} size={20} />
			),
			value: information.phone,
		},
		{
			icon: (className) => <TbWorld className={className} size={20} />,
			value: information.region,
		},
	];

	return (
		<div className="flex flex-col w-full px-4 py-3 gap-y-4">
			<h2 className="text-lg font-semibold ">Thông tin của bạn</h2>
			{informationRender.map((info, index) => {
				return (
					<div
						key={index}
						className="flex items-center gap-x-4 [&:first-of-type_span]:ml-1"
					>
						{info.icon("text-text-primary")}
						<span>{info.value}</span>
					</div>
				);
			})}
		</div>
	);
};

export default InformationPanel;
