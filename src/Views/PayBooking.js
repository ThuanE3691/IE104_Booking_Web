import { useParams } from "react-router";
import { useMemo, useState } from "react";
import findHotel from "@/Utils/findHotel";
import InputForm from "@/Layouts/Site/PayBooking/InputForm";
import HotelBook from "@/Layouts/Site/PayBooking/HotelBook";
import DetailBook from "@/Layouts/Site/PayBooking/DetailBook";
import SpecialRequest from "@/Layouts/Site/PayBooking/SpecialRequest";
import MultiStepProgress from "@/Layouts/Site/PayBooking/MultiStepProgress";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import InformationPanel from "@/Layouts/Site/PayBooking/InformationPanel";
import { AnimatePresence, motion } from "framer-motion";
import ResizablePanel from "@/Components/Feature/Layout/ResizablePanel";
import PaymentPanel from "@/Layouts/Site/PayBooking/PaymentPanel";
import PricePanel from "@/Layouts/Site/PayBooking/PricePanel";
import Panel from "@/Components/Feature/Layout/Panel";

const PayBooking = () => {
	const { hotelId, blockId } = useParams();

	const hotel = useMemo(
		() =>
			findHotel({
				page: 0,
				hotelId: hotelId,
			}),
		[hotelId]
	);

	const block = useMemo(
		() => hotel.rooms.block.find((b) => b.block_id === blockId),
		[blockId, hotel.rooms.block]
	);

	const steps = ["Chi tiết về bạn", "Thanh toán", "Xác nhận"];

	const [[complete, current], setProgress] = useState([
		[false, false, false],
		0,
	]);

	const [information, setInformation] = useState({
		lastName: "",
		firstName: "",
		email: "",
		region: "",
		phone: "",
	});

	const onChangeInformationForm = (e) => {
		setInformation({ ...information, [e.target.name]: e.target.value });
	};

	const handleChangeStep = (direction) => {
		if (current + direction >= steps.length || current + direction < 0) return;

		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		let new_complete = [...complete];

		if (direction > 0) {
			for (let i = current; i < current + direction; i++) {
				new_complete[i] = true;
			}
		} else {
			for (let i = current; i >= current + direction; i--) {
				new_complete[i] = false;
			}
		}
		setProgress([new_complete, current + direction]);
	};

	const asidePanel = [
		{
			panel: <InformationPanel information={information}></InformationPanel>,
			name: "infoPanel",
			condition: current >= 1,
		},
		{
			panel: <PricePanel price={block.product_price_breakdown}></PricePanel>,
			name: "pricePanel",
			condition: current >= 1,
		},
		{
			panel: <HotelBook hotel={hotel} startAnimate={current >= 1}></HotelBook>,
			name: "HotelPanel",
			condition: true,
		},
		{
			panel: (
				<DetailBook
					block={block}
					room={hotel.rooms.rooms[block.room_id]}
				></DetailBook>
			),
			name: "DetailPanel",
			condition: true,
		},
	];

	return (
		<div className="flex flex-col w-full min-h-full px-32 mb-32 bg-main-bg font-vietnam-pro">
			<MultiStepProgress
				steps={steps}
				progress={{ complete, current }}
				handleChangeStep={handleChangeStep}
			></MultiStepProgress>
			<section className="grid grid-cols-[1.05fr,1.95fr] mt-16 gap-x-5">
				<motion.aside className="flex flex-col w-full gap-y-4 will-change-contents">
					<AnimatePresence>
						{asidePanel.map((panel) => {
							return (
								panel.condition && <Panel key={panel.name}>{panel.panel}</Panel>
							);
						})}
					</AnimatePresence>
				</motion.aside>
				<div className="flex flex-col gap-y-4">
					<ResizablePanel className="border-2 rounded-lg border-slate-200 ">
						<AnimatePresence>
							{current === 0 && (
								<InputForm
									information={information}
									onChangeInformationForm={onChangeInformationForm}
								></InputForm>
							)}
							{current === 1 && <PaymentPanel></PaymentPanel>}
						</AnimatePresence>
					</ResizablePanel>
					<AnimatePresence>
						{current === 0 && <SpecialRequest></SpecialRequest>}
					</AnimatePresence>
				</div>
			</section>
			<div className="flex items-center mt-4 ml-auto gap-x-4">
				<button
					className="flex items-center px-3 py-2 font-semibold text-white transition-colors rounded-md bg-button-primary hover:bg-slate-200 hover:text-black gap-x-2"
					onClick={() => handleChangeStep(-1)}
				>
					<FaArrowLeftLong></FaArrowLeftLong> Quay lại
				</button>
				<button
					className="flex items-center px-3 py-2 font-semibold text-white transition-colors rounded-md bg-button-primary hover:bg-slate-200 hover:text-black gap-x-2"
					onClick={() => handleChangeStep(1)}
				>
					Thanh toán <FaArrowRightLong></FaArrowRightLong>
				</button>
			</div>
		</div>
	);
};

export default PayBooking;
