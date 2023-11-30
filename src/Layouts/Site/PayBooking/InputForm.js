const InputForm = () => {
	const formList = ["Họ", "Tên", "Email", "", "Vùng quốc gia", "Số điện thoại"];

	return (
		<div className="flex flex-col w-full px-5 pt-4 pb-6 border-2 rounded-lg border-slate-200">
			<h2 className="text-xl font-semibold">Nhập thông tin chi tiết của bạn</h2>
			<section className="grid grid-cols-2 grid-rows-3 mt-4 gap-x-4 gap-y-4">
				{formList.map((name) => {
					if (name === "") return <div></div>;
					return (
						<div className="flex flex-col gap-y-1">
							<label forId={name} className="font-semibold">
								{name}
							</label>
							<input
								className="w-full px-2 py-2 rounded-sm bg-slate-200 focus:outline-button-primary"
								id={name}
							></input>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default InputForm;
