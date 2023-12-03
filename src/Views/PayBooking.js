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
import PaymentPanel from "@/Layouts/Site/PayBooking/PaymentPanel";
import PricePanel from "@/Layouts/Site/PayBooking/PricePanel";
import Panel from "@/Components/Feature/Layout/Panel";
import CompleteMessage from "@/Layouts/Site/PayBooking/CompleteMessage";
import { useNavigate } from "react-router-dom";

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

	const navigate = useNavigate();

	const block = useMemo(
		() => hotel.rooms.block.find((b) => b.block_id === blockId),
		[blockId, hotel.rooms.block]
	);

	const steps = ["Chọn phòng", "Chi tiết về bạn", "Thanh toán"];

	const [[complete, current], setProgress] = useState([
		[true, false, false],
		1,
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

	const checkFormStatus = () => {
		let flag = true;

		Object.keys(information).forEach((key) => {
			if (information[key] === "") {
				flag = false;
				const ip = document.querySelector(`input[name='${key}'`);
				ip.classList.add("invalid-input");
			}
		});
		return flag;
	};

	const handleChangeStep = (direction) => {
		if (current + direction < 0) return;

		if (current === steps.length) return;

		if (current + direction === 0) navigate(`/search/hotel/${hotel.hotel_id}`);

		if (current === 1 && !checkFormStatus()) return;
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		let new_complete = [...complete];

		let maxRange = Math.min(current + direction, steps.length);
		if (direction > 0) {
			for (let i = current; i < maxRange; i++) {
				new_complete[i] = true;
			}
		} else {
			for (let i = current; i >= current + direction; i--) {
				new_complete[i] = false;
			}
		}
		setProgress([new_complete, maxRange]);
	};

	const asidePanel = [
		{
			panel: <InformationPanel information={information}></InformationPanel>,
			name: "infoPanel",
			show: current >= 2,
		},
		{
			panel: <PricePanel price={block.product_price_breakdown}></PricePanel>,
			name: "pricePanel",
			show: current >= 2,
		},
		{
			panel: <HotelBook hotel={hotel} startAnimate={current >= 1}></HotelBook>,
			name: "HotelPanel",
			show: true,
		},
		{
			panel: (
				<DetailBook
					block={block}
					room={hotel.rooms.rooms[block.room_id]}
				></DetailBook>
			),
			name: "DetailPanel",
			show: true,
		},
	];

	const inputPanel = [
		{
			panel: (
				<InputForm
					information={information}
					onChangeInformationForm={onChangeInformationForm}
				></InputForm>
			),
			name: "inputPanel",
			show: current === 1,
		},
		{
			panel: <PaymentPanel></PaymentPanel>,
			name: "paymentPanel",
			show: current === 2,
		},
		{
			panel: <SpecialRequest></SpecialRequest>,
			name: "SpecialPanel",
			show: current === 1,
		},
	];

	const buttonContent = [
		"Chọn phòng",
		"Chi tiết về bạn",
		"Thanh toán",
		"Hoàn tất đặt chỗ",
	];

	return (
		<div className="flex flex-col w-full min-h-full px-32 mb-32 bg-main-bg font-vietnam-pro">
			<MultiStepProgress
				steps={steps}
				progress={{ complete, current }}
				handleChangeStep={handleChangeStep}
			></MultiStepProgress>
			<AnimatePresence>
				{current < 3 && (
					<motion.section
						className="grid grid-cols-[1.05fr,1.95fr] mt-16 gap-x-5"
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						key="payment-process"
					>
						<motion.aside className="flex flex-col w-full gap-y-4 will-change-contents">
							<AnimatePresence>
								{asidePanel.map((panel) => {
									return (
										panel.show && (
											<Panel key={panel.name} panelPosition="left">
												{panel.panel}
											</Panel>
										)
									);
								})}
							</AnimatePresence>
						</motion.aside>
						<motion.div className="relative flex flex-col overflow-x-hidden gap-y-4">
							<AnimatePresence>
								{inputPanel.map((panel) => {
									return (
										panel.show && (
											<Panel key={panel.name} panelPosition="right">
												{panel.panel}
											</Panel>
										)
									);
								})}
							</AnimatePresence>
							<div className="flex items-center ml-auto gap-x-4">
								<button
									className="flex items-center px-3 py-2 font-semibold text-black transition-colors rounded-md hover:bg-button-primary bg-slate-200 hover:text-white gap-x-2"
									onClick={() => handleChangeStep(-1)}
								>
									<FaArrowLeftLong></FaArrowLeftLong>{" "}
									{buttonContent[current - 1]}
								</button>
								<button
									className="flex items-center px-3 py-2 font-semibold text-white transition-colors rounded-md bg-button-primary hover:bg-slate-200 hover:text-black gap-x-2"
									onClick={() => handleChangeStep(1)}
								>
									{buttonContent[current + 1]}{" "}
									<FaArrowRightLong></FaArrowRightLong>
								</button>
							</div>
						</motion.div>
					</motion.section>
				)}
				{current === 3 && <CompleteMessage></CompleteMessage>}
			</AnimatePresence>
		</div>
	);
};

export default PayBooking;
