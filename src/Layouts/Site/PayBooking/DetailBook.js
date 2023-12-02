import { IoIosBed } from "react-icons/io";
import { LuBedSingle } from "react-icons/lu";
import { BsPeopleFill } from "react-icons/bs";

const DetailBook = ({ room, block }) => {
	return (
		<div className="relative flex flex-col gap-y-2">
			<h2 className="px-4 py-3 text-lg font-semibold">Chi tiết đặt phòng</h2>
			<div className="grid grid-cols-[0.75fr,1.25fr] px-4 py-2 bg-slate-200 gap-x-2 gap-y-2">
				<span className=" text-[#5D5B5B]">Ngày nhận phòng</span>
				<div className="flex flex-col gap-y-0.5">
					<time className="font-semibold">Thứ 5, ngày 30 tháng 11, 2023</time>
					<span className="text-sm">Từ 14:00</span>
				</div>
				<span className=" text-[#5D5B5B]">Ngày trả phòng</span>
				<div className="flex flex-col gap-y-0.5">
					<time className="font-semibold">Thứ 3, ngày 05 tháng 12, 2023</time>
					<span className="text-sm">Từ 11:00 - 12:00</span>
				</div>
			</div>
			<div className="flex flex-col px-4 py-2 gap-y-2">
				<span className="font-semibold ">{block.room_name}</span>
				<div className="grid grid-cols-2 gap-y-1.5">
					<span className="text-[#5D5B5B] flex items-center text-base gap-x-3">
						<BsPeopleFill></BsPeopleFill>
						Số khách
					</span>
					<span>2 khách</span>
					{room.bed_configurations[0].bed_types.map((bed, index) => {
						return (
							<>
								<span
									className="flex items-center gap-x-2 text-base text-[#5D5B5B]"
									key={bed.bed_type}
								>
									{bed.name_with_count.includes("đơn") ? (
										<>
											<LuBedSingle size={20}></LuBedSingle>
											Giường đơn
										</>
									) : (
										<>
											<IoIosBed size={20}></IoIosBed> Giường đôi
										</>
									)}
								</span>

								<span key={index}>{bed.name_with_count}</span>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default DetailBook;
