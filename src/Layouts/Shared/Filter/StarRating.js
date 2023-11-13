import { FaStar } from "react-icons/fa";
import { useState } from "react";

const StarRating = ({ rating, setRating }) => {
	const [hover, setHover] = useState(null);

	return (
		<section className="mt-8">
			<h3 className="text-xl font-semibold">Xếp hạng của chỗ nghỉ</h3>
			<div className="flex items-center justify-center gap-2 my-8">
				{[...Array(5)].map((star, index) => {
					const currentRating = index + 1;
					return (
						<label key={index}>
							<input
								type="radio"
								name="rating"
								value={currentRating}
								onClick={() => setRating(currentRating)}
								className="hidden "
							/>
							<FaStar
								className="transition-all cursor-pointer active:scale-[0.7]"
								size={25}
								color={
									currentRating <= (rating || hover) ? "#ffc107" : "#e4e5e9"
								}
								onMouseEnter={() => setHover(currentRating)}
								onMouseLeave={() => setHover(null)}
							></FaStar>
						</label>
					);
				})}
			</div>
		</section>
	);
};

export default StarRating;
