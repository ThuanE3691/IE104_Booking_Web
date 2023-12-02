import { motion } from "framer-motion";

const InputForm = ({ information, onChangeInformationForm }) => {
	const formList = [
		{ label: "Họ", name: "lastName" },
		{ label: "Tên", name: "firstName" },
		{ label: "Email", name: "email" },
		{ label: "empty", name: "" },
		{ label: "Vùng quốc gia", name: "region" },
		{ label: "Số điện thoại", name: "phone" },
	];

	return (
		<motion.div
			className="flex flex-col w-full px-5 pt-4 pb-6"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			key="input-form"
		>
			<h2 className="text-xl font-semibold">Nhập thông tin chi tiết của bạn</h2>
			<section className="grid grid-cols-2 grid-rows-3 mt-4 gap-x-4 gap-y-4">
				{formList.map((item) => {
					if (item.name === "") return <div key="empty"></div>;
					return (
						<div className="flex flex-col gap-y-1" key={item.name}>
							<label htmlFor={item.label} className="font-semibold">
								{item.label}
							</label>
							<input
								className="w-full px-2 py-2 rounded-sm bg-slate-200 focus:outline-button-primary"
								id={item.label}
								name={item.name}
								value={information[item.name]}
								onChange={onChangeInformationForm}
							></input>
						</div>
					);
				})}
			</section>
		</motion.div>
	);
};

export default InputForm;
