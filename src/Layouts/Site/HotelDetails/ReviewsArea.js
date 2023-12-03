import { FaRegUserCircle } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { PiSmileySadBold } from "react-icons/pi";

const ReviewsArea = ({ review_score, review_score_word, hotel_reviews }) => {
	if (!review_score)
		return (
			<section name="review" className="mt-8">
				<h2 className="text-xl font-semibold">Đánh giá của khách</h2>
				<span>Khách sạn này hiện tại chưa có đánh giá</span>
			</section>
		);

	return (
		<section className="mt-8" name="review">
			<h2 className="text-xl font-semibold">Đánh giá của khách</h2>
			<div className="flex items-center mt-4 gap-x-2">
				<span className="p-2 font-semibold text-white bg-button-primary w-fit rounded-[8px_8px_8px_0]">
					{review_score.toFixed(1)}
				</span>
				<span className="font-semibold ">{review_score_word}</span>
				<span className="ml-6 text-sm font-medium">
					{hotel_reviews.length} đánh giá
				</span>
			</div>
			<ul className="flex flex-col mt-4 gap-y-8">
				{hotel_reviews.slice(0, 5).map((review) => {
					return (
						<li
							className="grid grid-cols-[20%,80%] px-8 py-4 border-2 rounded-lg border-slate-200 grid-rows-1"
							key={review.review_id}
						>
							<div className="flex items-center content-start gap-x-4 place-self-start">
								{review.author.avatar ? (
									<img
										src={`${review.author.avatar}`}
										alt=""
										className="object-cover w-8 rounded-full"
									/>
								) : (
									<FaRegUserCircle size={32}></FaRegUserCircle>
								)}
								<span>{review.author.name}</span>
							</div>
							<section className="flex flex-col w-full">
								<div className="flex items-center justify-between w-full">
									<div className="flex items-center gap-x-2">
										<span className="p-2 text-sm font-semibold text-white bg-button-primary w-fit rounded-[8px_8px_8px_0]">
											{review.average_score.toFixed(1)}
										</span>
										<span>{review.title}</span>
									</div>

									<time className="font-semibold text-slate-400">
										{review.date}
									</time>
								</div>
								<div className="flex flex-col mt-4">
									{review.pros && (
										<div className="flex items-center gap-x-2">
											<FaRegSmile className="text-lg text-green-400 " />
											<p>{review.pros}</p>
										</div>
									)}
									{review.cons && (
										<div className="flex items-center mt-2 -translate-x-[1px] gap-x-2">
											<PiSmileySadBold className="text-xl text-red-400 " />
											<p>{review.cons}</p>
										</div>
									)}
								</div>
							</section>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default ReviewsArea;
