const Timeline = ({ timeline }) => {
	return (
		<div className="w-2 rounded-md bg-button-primary h-[2000px] relative mt-8">
			{timeline.map((state, id) => {
				return (
					<div
						className={
							"absolute text-6xl font-semibold bg-main-bg z-1 py-8 -translate-x-[50%] border-button-primary border-4 px-8 rounded-full"
						}
						style={{ top: (id + 1) * (id > 0 ? 20 : 15) + "%" }}
						key={id}
					>
						{state.icon}
						{id % 2 === 0 && (
							<div className="absolute w-[200px] bg-button-primary z-1 h-1 top-[50%] translate-x-[100px] ">
								<span className="absolute text-4xl -translate-y-[120%]">
									{state.time}
								</span>
								<ul className="w-[400px] text-xl font-normal list-disc flex flex-col gap-y-4 translate-x-[60%]  -translate-y-[50%]">
									{state.contents.map((content, index) => {
										return <li key={index}>{content}</li>;
									})}
								</ul>
							</div>
						)}
						{id % 2 !== 0 && (
							<div className="absolute w-[200px] bg-button-primary z-1 h-1 top-[50%] -translate-x-[250px] ">
								<span className="absolute text-4xl -translate-y-[120%]">
									{state.time}
								</span>
								<ul className="w-[400px] text-xl font-normal list-disc flex flex-col gap-y-4 -translate-x-[105%]  -translate-y-[50%]">
									{state.contents.map((content, index) => {
										return (
											<li className="text-justify" key={index}>
												{content}
											</li>
										);
									})}
								</ul>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Timeline;
