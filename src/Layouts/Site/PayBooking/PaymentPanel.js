import { motion } from "framer-motion";
import visa from "@IconCommon/Brands/visa.png";
import paypal from "@IconCommon/Brands/paypal.png";
import momo from "@IconCommon/Brands/MoMo_Logo.png";
import mastercard from "@IconCommon/Brands/mastercard.png";
import CheckBox from "@/Components/Layout/CheckBox";

const PaymentPanel = () => {
	const forms = ["Tên chủ thẻ", "Loại thẻ", "Số thẻ", "Thẻ có thời hạn đến"];

	return (
		<motion.div
			className="relative px-6 py-4"
			key="payment-panel"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ type: "spring", duration: 0.3 }}
		>
			<header className="flex items-center w-full">
				<h2 className="text-xl font-semibold">Phương thức thanh toán</h2>
				<div className="flex items-center ml-auto gap-x-6">
					<img src={visa} alt="" className="w-7" />
					<img src={paypal} alt="" className="w-7" />
					<img src={mastercard} alt="" className="w-7" />
					<img src={momo} alt="" className="w-7" />
				</div>
			</header>
			<ul className="flex flex-col mt-8 gap-y-6">
				{forms.map((name, index) => {
					return (
						<li className="flex flex-col gap-y-1 [&:nth-child(1)_label]:after:content-['(viết_in_hoa_không_dấu)'] [&:nth-child(1)_label]:after:ml-4 [&:nth-child(1)_label]:after:font-normal [&:nth-child(1)_input]:uppercase">
							<label htmlFor={name} className="font-semibold ">
								{name}
							</label>
							{index !== 1 ? (
								<input
									type="text"
									className="px-2 py-2 outline-button-primary bg-slate-200 w-[40%] rounded-sm"
								/>
							) : (
								<select className="px-2 py-2 outline-button-primary bg-slate-200 w-[40%] rounded-sm">
									<option>VISA</option>
									<option>Momo</option>
									<option>Paypal</option>
									<option>Mastercard</option>
								</select>
							)}
						</li>
					);
				})}
			</ul>
			<div className="flex items-center mt-16 gap-x-1">
				<CheckBox></CheckBox>
				<p>
					Có, tôi đồng ý với{" "}
					<span className="cursor-pointer hover:underline hover:underline-offset-4 text-button-primary">
						{" "}
						điều kiện đặt phòng
					</span>
					,{" "}
					<span className="cursor-pointer hover:underline hover:underline-offset-4 text-button-primary">
						điều khoản chung
					</span>{" "}
					và{" "}
					<span className="cursor-pointer hover:underline hover:underline-offset-4 text-button-primary">
						chính sách bảo mật
					</span>
				</p>
			</div>
		</motion.div>
	);
};

export default PaymentPanel;
