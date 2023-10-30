import { motion } from "framer-motion";

export const ProvinceCard = ({ province_name, province_img }) => {
	return (
		<motion.div
			className="relative flex flex-col justify-end text-white bg-no-repeat bg-contain rounded-xl w-[290px] h-[200px] select-none z-0 overflow-hidden"
			key={province_name}
		>
			<motion.img
				src={province_img}
				alt=""
				className="absolute  rounded-lg brightness-[95%] w-[290px] h-[200px] overflow-hidden "
				whileHover={{
					scale: 1.3,
					boxShadow:
						"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
					transition: {
						duration: 3,
						ease: "linear",
					},
				}}
			/>
			<p className="absolute px-4 py-4 text-xl font-bold">{province_name}</p>
		</motion.div>
	);
};
