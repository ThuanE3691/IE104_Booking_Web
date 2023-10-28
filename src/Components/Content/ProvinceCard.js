import { AnimatePresence, motion } from "framer-motion";

export const ProvinceCard = ({ province_name, province_img, direction }) => {
	let variants = {
		enter: (direction) => ({ x: `${direction * 100}%`, opacity: 0 }),
		middle: (direction) => ({ x: 0, opacity: 1 }),
		exit: (direction) => ({ x: `${-direction * 100}%`, opacity: 0 }),
	};

	return (
		<AnimatePresence>
			<motion.div
				className="relative flex flex-col justify-end text-white bg-no-repeat bg-contain shadow-2xl rounded-xl w-[295px] h-[200px] select-none z-0"
				key={province_name}
				initial="enter"
				animate="middle"
				exit="exit"
				custom={direction}
				variants={variants}
			>
				<img
					src={province_img}
					alt=""
					className="absolute  rounded-lg brightness-[95%] w-[295px] h-[200px]"
				/>
				<p className="absolute px-4 py-4 text-xl font-bold">{province_name}</p>
			</motion.div>
		</AnimatePresence>
	);
};
