import sale_img1 from "@/Assets/Images/sale_img1.jpeg";
import sale_img2 from "@/Assets/Images/sale_img2.jpeg";

const SaleSection = () => {
	return (
		<section className="font-vietnam-pro">
			<h3 className="content-header ">Ưu đãi</h3>
			<h4 className="mt-2 font-normal">
				Khuyến mãi, giảm giá và ưa đãi đặc biệt dành riêng cho bạn
			</h4>
			<div className="flex items-center gap-8 mt-4">
				<div className="flex bg-white shadow-2xl rounded-xl">
					<div className="pt-6 pb-2 pl-6 pr-16 w-[512px]">
						<h4 className="text-lg font-semibold">
							Tận hưởng kỳ nghỉ dài nhất của bạn
						</h4>
						<p className="mt-1 text-sm leading-6 tracking-wider font-extralight">
							Tìm kiếm các chỗ nghỉ cho phép lưu trú dài ngày với giá theo tháng
							ưu đãi
						</p>
						<button className="px-5 py-2 mt-4 font-semibold text-white transition-colors rounded-lg bg-button-primary hover-button">
							Tìm chỗ nghỉ
						</button>
					</div>
					<img
						src={sale_img1}
						alt=""
						className="w-[185px] aspect-square rounded-r-xl"
					/>
				</div>
				<div
					className=" h-[185px] w-2/4 bg-cover bg-no-repeat rounded-xl shadow-xl pl-6 pr-[15%] pt-6 pb-2 text-white"
					style={{ backgroundImage: `url(${sale_img2})` }}
				>
					<h4 className="text-lg font-semibold ">
						Tiết kiệm 15% với giá Ưu Đãi Cuối Năm
					</h4>
					<p className="mt-1 text-sm leading-6 tracking-wider font-extralight">
						Khám phá hàng nghìn điểm đến khắp thế giới và tiết kiệm từ 15%
					</p>
					<button className="px-5 py-2 mt-4 font-semibold text-white transition-colors rounded-lg bg-button-primary hover-button">
						Tìm Ưu Đãi Cuối Năm
					</button>
				</div>
			</div>
		</section>
	);
};

export default SaleSection;
