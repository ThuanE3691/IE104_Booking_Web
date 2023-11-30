const DetailBook = ({ room, block }) => {
	return (
		<div className="flex flex-col w-full border-2 rounded-lg border-slate-200 gap-y-2 h-fit ">
			<h2 className="px-4 py-3 text-lg font-semibold">Chi tiết đặt phòng</h2>
			<div className="grid grid-cols-[0.75fr,1.25fr] px-4 py-2 bg-slate-200 gap-x-2 gap-y-2">
				<span className=" text-[#5D5B5B]">Ngày nhận phòng</span>
				<div className="flex flex-col gap-y-0.5">
					<time className="font-semibold">Thứ 5, ngày 30 tháng 11, 2023</time>
					<span className="text-sm">Từ 14h00</span>
				</div>
				<span className=" text-[#5D5B5B]">Ngày trả phòng</span>
				<div className="flex flex-col gap-y-0.5">
					<time className="font-semibold">Thứ 3, ngày 05 tháng 12, 2023</time>
					<span className="text-sm">Từ 11h00 - 12h00</span>
				</div>
			</div>
			<div className="flex flex-col px-4 py-2 gap-y-2">
				<span className="font-semibold ">Căn hộ 1 phòng ngủ</span>
				<div className="grid grid-cols-2 gap-y-1.5">
					<span className="text-[#5D5B5B]">Số khách</span>
					<span>2 khách</span>
					<span className="text-[#5D5B5B]">Giường</span>
					<span>1 giường đôi</span>
				</div>
			</div>
		</div>
	);
};

export default DetailBook;
