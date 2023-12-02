const InputForm = ({ information, onChangeInformationForm }) => {
	const formList = [
		{ label: "Họ", name: "lastName" },
		{ label: "Tên", name: "firstName" },
		{ label: "Email", name: "email" },
		{ label: "empty", name: "" },
		{ label: "Vùng quốc gia", name: "region" },
		{ label: "Số điện thoại", name: "phone" },
	];

	const onChangeInput = (e) => {
		onChangeInformationForm(e);

		if (e.target.className.includes("invalid-input") && e.target.value !== "") {
			e.target.className = e.target.className.replace("invalid-input", "");
		}
	};

	return (
		<div className="flex flex-col w-full px-5 pt-4 pb-6" key="input-form">
			<h2 className="text-xl font-semibold">Nhập thông tin chi tiết của bạn</h2>
			<section className="grid grid-cols-2 grid-rows-3 mt-4 gap-x-4 gap-y-4">
				{formList.map((item) => {
					if (item.name === "") return <div key="empty"></div>;
					return (
						<div className="flex flex-col gap-y-1" key={item.name}>
							<label
								htmlFor={item.label}
								className="font-semibold pointer-events-none"
							>
								{item.label}
							</label>
							<input
								className="w-full px-2 py-2 rounded-sm bg-slate-200 focus:outline-button-primary"
								id={item.label}
								name={item.name}
								value={information[item.name]}
								onChange={onChangeInput}
							></input>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default InputForm;
