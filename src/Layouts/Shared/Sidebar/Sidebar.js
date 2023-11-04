import CheckBox from "@/Components/CheckBox";

const SideBar = () => {
	const hotelType = [
		"Khách sạn",
		"Căn hộ",
		"Khu nghỉ dưỡng",
		"Biệt thự",
		"Khu cắm trại",
	];

	return (
		<aside className="border-2 font-vietnam-pro">
			<form className="flex flex-col gap-4 px-4 py-8">
				<section className="flex flex-col ">
					<h3 className="text-xl font-semibold">Giá tiền (mỗi đêm)</h3>
				</section>
				<section className="flex flex-col justify-start gap-2">
					<h3 className="text-xl font-semibold">Loại chỗ nghĩ</h3>
					<div className="flex flex-col gap-3">
						{hotelType.map((type) => {
							return <CheckBox value={type} key={type}></CheckBox>;
						})}
					</div>
				</section>
				<section></section>
				<section></section>
			</form>
		</aside>
	);
};

export default SideBar;
