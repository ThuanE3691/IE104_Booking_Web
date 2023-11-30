import { useParams } from "react-router";
import { useMemo } from "react";
import findHotel from "@/Utils/findHotel";
import InputForm from "@/Layouts/Site/PayBooking/InputForm";
import HotelBook from "@/Layouts/Site/PayBooking/HotelBook";
import DetailBook from "@/Layouts/Site/PayBooking/DetailBook";
import SpecialRequest from "@/Layouts/Site/PayBooking/SpecialRequest";

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

	return (
		<div className="flex flex-col w-full min-h-full px-32 bg-main-bg font-vietnam-pro">
			<section className="grid grid-cols-[1.05fr,1.95fr] my-16 gap-x-5">
				<aside className="flex flex-col w-full gap-y-4">
					<HotelBook hotel={hotel}></HotelBook>
					<DetailBook></DetailBook>
				</aside>
				<div className="flex flex-col gap-y-4">
					<InputForm></InputForm>
					<SpecialRequest></SpecialRequest>
				</div>
			</section>
		</div>
	);
};

export default PayBooking;
