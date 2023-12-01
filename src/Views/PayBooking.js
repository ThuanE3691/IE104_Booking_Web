import { useParams } from "react-router";
import { useMemo, useState } from "react";
import findHotel from "@/Utils/findHotel";
import InputForm from "@/Layouts/Site/PayBooking/InputForm";
import HotelBook from "@/Layouts/Site/PayBooking/HotelBook";
import DetailBook from "@/Layouts/Site/PayBooking/DetailBook";
import SpecialRequest from "@/Layouts/Site/PayBooking/SpecialRequest";
import MultiStepProgress from "@/Layouts/Site/PayBooking/MultiStepProgress";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

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
		[blockId]
	);

	const steps = ["Chi tiết về bạn", "Thanh toán", "Xác nhận"];

	const [[complete, current], setProgress] = useState([
		[false, false, false],
		0,
	]);

	const handleChangeStep = (direction) => {
		if (current + direction >= steps.length || current + direction < 0) return;
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

	return (
		<div className="flex flex-col w-full min-h-full px-32 mb-32 bg-main-bg font-vietnam-pro">
			<MultiStepProgress
				steps={steps}
				progress={{ complete, current }}
				handleChangeStep={handleChangeStep}
			></MultiStepProgress>
			<section className="grid grid-cols-[1.05fr,1.95fr] mt-16 gap-x-5">
				<aside className="flex flex-col w-full gap-y-4">
					<HotelBook hotel={hotel}></HotelBook>
					<DetailBook
						block={block}
						room={hotel.rooms.rooms[block.room_id]}
					></DetailBook>
				</aside>
				<div className="flex flex-col gap-y-4">
					<InputForm></InputForm>
					<SpecialRequest></SpecialRequest>
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
