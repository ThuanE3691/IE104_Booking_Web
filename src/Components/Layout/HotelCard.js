import HotelImg from "@/Assets/Images/HotelType/CanHo.jpg";
import { FaStar } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaBed } from "react-icons/fa6";
import { FaShower } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const HotelCard = () => {
	return (
		<section className="flex mt-8 bg-white  rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
			<img src={HotelImg} alt="" className="w-64 rounded-l-xl" />
			<div className="w-full px-8 py-4">
				<div className="flex w-full">
					<span className="text-xl font-semibold">
						Goldview Luxury Apartment Building
					</span>
					<div className="flex items-center ml-auto gap-x-2">
						<div className="flex flex-col">
							<span className="font-semibold text-end">Rất tốt</span>
							<span className="text-sm">142 đánh giá</span>
						</div>
						<div className="p-2 font-semibold text-white rounded-[10px_10px_10px_0px] bg-button-primary w-fit">
							8.7
						</div>
					</div>
				</div>
				<div className="flex items-center font-semibold gap-x-1 text-text-primary">
					<BiSolidBuildingHouse size={14}></BiSolidBuildingHouse>
					<span className="text-sm">Căn hộ</span>
					<div className="flex items-center gap-x-1">
						{[...Array(4)].map((value) => {
							return (
								<FaStar
									key={value}
									size={12}
									className="text-yellow-400 "
								></FaStar>
							);
						})}
					</div>
				</div>
				<div className="flex mt-2 text-text-primary">
					<div className="flex flex-col">
						<span>Quận 1, TP. Hồ Chí Minh</span>
						<div className="mt-4 ml-4">
							<span className="font-semibold text-black ">
								Căn hộ 1 phòng ngủ
							</span>
							<div className="flex items-center mt-2 gap-x-6">
								<div className="flex items-center gap-x-1.5">
									<FaPerson></FaPerson>
									<span className="text-sm font-semibold text-black">
										2 nguời lớn
									</span>
								</div>
								<div className="flex items-center gap-x-1.5">
									<FaBed></FaBed>
									<span className="text-sm font-semibold text-black">
										1 phòng ngủ
									</span>
								</div>
								<div className="flex items-center gap-x-1.5">
									<FaShower></FaShower>
									<span className="text-sm font-semibold text-black">
										1 phòng tắm
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col ml-auto text-end gap-y-1">
						<span className="text-black">Mỗi đêm, 2 người lớn</span>
						<span className="text-sm text-red-500 line-through">
							650.000 VND
						</span>
						<span className="text-xl font-semibold text-black">
							400.000 VND
						</span>
						<button className="flex items-center justify-center py-2 mt-4 text-lg font-semibold text-white rounded-xl bg-button-primary">
							Xem phòng <FaArrowRightLong className="ml-2"></FaArrowRightLong>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HotelCard;
