import formatNumber from "@/Utils/formatNumber";
import { motion } from "framer-motion";

const PricePanel = ({ price }) => {
	const reverseCurrency = (str) => {
		return str.split(" ").reverse().join(" ");
	};
	return (
		<motion.div
			className="relative flex flex-col px-4 py-3 gap-y-2"
			key="price-panel"
		>
			<h2 className="text-lg font-semibold text-[#5D5B5B]">
				Thông tin thanh toán
			</h2>
			<div>Tổng giá 2 đêm với</div>
			<div className="grid grid-cols-2 gap-y-2 justify-items-end">
				<span className=" justify-self-start text-[#5D5B5B]">Giá gốc</span>
				<span className="font-semibold place-content-end">
					{reverseCurrency(price.strikethrough_amount.amount_rounded)}
				</span>
				<span className=" justify-self-start text-[#5D5B5B]">Thuế và phí</span>
				<span className="font-semibold place-content-end">
					{reverseCurrency(
						price.included_taxes_and_charges_amount.amount_rounded
					)}
				</span>
				<span className=" justify-self-start text-[#5D5B5B]">Giảm giá</span>
				<span className="font-semibold place-content-end">
					{formatNumber(
						price.strikethrough_amount.value - price.gross_amount.value
					) + " VND"}
				</span>
				<span className="font-semibold justify-self-start">Tổng cộng</span>
				<span className="col-start-2 row-start-5 font-semibold text-red-400 line-through place-content-end">
					{formatNumber(
						price.strikethrough_amount.value +
							Math.round(price.included_taxes_and_charges_amount.value)
					) + " VND"}
				</span>
				<span className="col-start-2 row-start-6 text-xl font-semibold place-content-end">
					{reverseCurrency(price.gross_amount.amount_rounded)}
				</span>
			</div>
		</motion.div>
	);
};

export default PricePanel;
