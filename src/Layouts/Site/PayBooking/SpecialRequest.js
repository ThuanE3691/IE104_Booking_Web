import ResizablePanel from "@/Components/Feature/Layout/ResizablePanel";
import CheckBox from "@/Components/Layout/CheckBox";
import { useState } from "react";
import { AnimatePresence, motion, usePresence } from "framer-motion";
import Timer from "@/Components/Layout/Timer";

const normalVariants = {
	initial: { scale: 0.8, opacity: 0 },
	animate: { scale: 1, opacity: 1 },
	exit: { scale: 0.8, opacity: 0 },
};

const OthersArea = () => {
	return (
		<div className="mt-0.5">
			<motion.span
				className="text-sm"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}
			>
				Vui lòng ghi yêu cầu của bạn tại đây
			</motion.span>
			<motion.textarea
				className="px-2 py-2 w-[80%] mt-1 border-2 rounded-lg border-button-primary min-h-[150px]"
				variants={normalVariants}
				initial="initial"
				animate="animate"
				exit="exit"
			></motion.textarea>
		</div>
	);
};

const BedOptions = () => {
	return (
		<div className="relative flex items-center mt-1 gap-x-4">
			<motion.div
				variants={normalVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				className="px-2 py-1 border-2 rounded-md border-button-primary"
			>
				Giường đơn
			</motion.div>
			<motion.div
				variants={normalVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				className="px-2 py-1 border-2 rounded-md border-button-primary"
			>
				Giường đôi
			</motion.div>
		</div>
	);
};

const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };

const SpecialRequest = () => {
	const choiceList = [
		{
			value: "Phòng không hút thuốc",
		},
		{
			value: "Phòng liên thông",
		},
		{
			value: "Giờ nhận phòng",
			choiceSelect: <Timer hour={"14"} minute={"00"} />,
		},
		{
			value: "Giờ trả phòng",
			choiceSelect: <Timer hour={"12"} minute={"00"} />,
		},
		{
			value: "Khác",
			choiceSelect: <OthersArea></OthersArea>,
		},
		{
			value: "Loại giường",
			choiceSelect: <BedOptions />,
		},
	];

	const [choice, setChoice] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
	]);

	const onChange = (e, index) => {
		setChoice((prev) => {
			let temp = [...prev];
			temp[index] = !temp[index];
			return temp;
		});
	};

	const [isPresent, safeToRemove] = usePresence();

	const animations = {
		layout: true,
		initial: "out",
		style: {
			position: isPresent ? "relative" : "absolute",
		},
		animate: isPresent ? "in" : "out",
		whileTap: "tapped",
		variants: {
			in: { height: "auto", opacity: 1, zIndex: 1 },
			out: { height: 0, opacity: 0, zIndex: -1 },
		},
		onAnimationComplete: () => !isPresent && safeToRemove(),
		transition,
	};

	return (
		<motion.div
			className="flex flex-col w-full px-5 pt-4 pb-6 border-2 rounded-lg border-slate-200"
			{...animations}
			key="special-panel"
		>
			<h2 className="text-xl font-semibold">Yêu cầu đặc biệt</h2>
			<p className="mt-2 text-sm">
				<em className="font-semibold ">Lưu ý:</em> Cơ sở lưu trú sẽ cố gắng đáp
				ứng yêu cầu của bạn dựa trên tình trạng sẵn có. Bạn có thể phải trả thêm
				phí cho một số yêu cầu và bạn không thể sửa yêu cầu sau khi đã hoàn tất
				thanh toán.
			</p>
			<ResizablePanel>
				<motion.div className="grid grid-cols-2 mt-3 gap-y-4">
					{choiceList.map((value, index) => {
						return (
							<motion.div key={index} className="relative">
								<CheckBox
									value={value.value}
									onChange={onChange}
									index={index}
								></CheckBox>
								<AnimatePresence>
									{choice[index] && value.choiceSelect}
								</AnimatePresence>
							</motion.div>
						);
					})}
				</motion.div>
			</ResizablePanel>
		</motion.div>
	);
};

export default SpecialRequest;
