import thuanImg from "@/Assets/Images/About/thuan.jpg";
import thuImg from "@/Assets/Images/About/thuPink.jpg";
import reactLogo from "@/Assets/Images/About/reactLogo.png";
import githubLogo from "@/Assets/Images/About/githubLogo.png";
import vscodeLogo from "@/Assets/Images/About/vscodeLogo.jpg";
import tailwindLogo from "@/Assets/Images/About/tailwindLogo.png";
import leafletLogo from "@/Assets/Images/About/leafletLogo.png";
import Timeline from "@/Layouts/Site/About/Timeline";
import homepage_bg from "@SiteAssets/Home/Search/villa.jpg";
import { FaRegMap, FaHome } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";

const About = () => {
	const timeline = [
		{
			icon: <FaHome size={48}></FaHome>,
			time: "Tuần 1",
			contents: [
				"Lên ý tưởng trang web",
				"Liệt kê các trang chính cho trang web",
				"Phân chia công việc",
				"Thiết lập và tải các thư viện cần thiết để tiến hành code",
				"Code UI và Logic các thành phần của thanh tìm kiếm",
			],
		},
		{
			icon: <IoSearch size={48} />,
			time: "Tuần 2",
			contents: [
				"Code UI các mục lớn của trang chủ",
				"Tạo các hiệu ứng xuất hiện, chuyển đổi",
				"Thiết kế trang danh sách khách sạn, thẻ khách sạn",
				"Code các thành phần nhỏ của trang danh sách khách sạn",
				"Code danh sách khách sạn",
			],
		},
		{
			icon: <FaRegMap size={48}></FaRegMap>,
			time: "Tuần 3",
			contents: [
				"Thiết kế Map Modal",
				"Code UI và logic Map Modal",
				"Tìm kiếm và xử lí API",
				"Sử dụng API hiển thị danh sách khách sạn",
				"Code hiệu ứng xuất hiện và sắp xếp",
			],
		},
		{
			icon: <MdAttachMoney size={48}></MdAttachMoney>,
			time: "Tuần 4",
			contents: [
				"Thiết kế trang chi tiết khách sạn",
				"Code trang chi tiết khách sạn",
				"Code thư viện hình ảnh khách sạn và animations",
				"Code trang thanh toán và hiệu ứng chuyển",
			],
		},
	];

	return (
		<div className="flex flex-col w-full min-h-full px-32 bg-white font-vietnam-pro">
			<motion.div className="relative h-[550px] mt-6">
				<div
					className="absolute inset-0 z-0 bg-bottom bg-no-repeat bg-cover rounded-2xl brightness-[60%]"
					style={{
						backgroundImage: `url(${homepage_bg})`,
					}}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				></div>
				<motion.div
					className="absolute z-10 font-semibold text-white select-none font-vietnam-pro left-[40%] top-[43%]"
					layoutId="bg-caption"
				>
					<p className="text-[56px] ">Về Travor</p>
				</motion.div>
			</motion.div>
			<div className="flex items-center justify-center w-full">
				<div className="flex items-center justify-center px-16 py-32  w-[1200px] before:content-['\201c'] before:text-[100px] before:block before:text-button-primary before:-translate-y-12 after:content-['”'] after:text-[100px] after:block after:text-button-primary select-none">
					<span className="text-4xl leading-[55px] italic">
						Mong muốn của chúng tôi là giúp khách hàng có thể tận hưởng những
						khoảnh khắc đáng nhớ trong mỗi chuyến đi
					</span>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center">
				<span className="font-semibold text-[46px]">Chúng tôi là</span>
				<div className="grid grid-cols-2 mt-8 gap-x-64">
					<div className="flex flex-col items-center justify-center text-2xl font-semibold gap-y-4">
						<img
							src={thuanImg}
							alt=""
							className=" w-[320px] h-[320px] object-cover rounded-full"
						/>
						<span>Nguyễn Minh Thuận</span>
						<span>20520795</span>
						<span>Developer</span>
					</div>
					<div className="flex flex-col items-center justify-center text-2xl font-semibold gap-y-4">
						<img
							src={thuImg}
							alt=""
							className=" w-[320px] h-[320px] object-cover rounded-full"
						/>
						<span>Nguyễn Hồng Anh Thư</span>
						<span>20520313</span>
						<span>Content creator/ Designer</span>
					</div>
				</div>
			</div>
			<div className="my-32">
				<span className="text-3xl font-semibold">
					Trang web được xây dựng bởi
				</span>
				<div className="grid items-center grid-cols-7 grid-rows-3 mt-16 justify-items-center gap-y-12">
					<span className="text-2xl font-semibold justify-self-start">
						Framework
					</span>
					<img src={tailwindLogo} alt="" className="col-span-6 bg-white w-72" />
					<span className="text-2xl font-semibold justify-self-start">
						Công cụ
					</span>
					<img src={githubLogo} alt="" className="w-48 col-span-3 bg-white" />
					<img src={vscodeLogo} alt="" className="w-64 col-span-3 bg-white" />
					<span className="text-2xl font-semibold justify-self-start">
						Thư viện
					</span>
					<img src={reactLogo} alt="" className="col-span-2 bg-white w-72" />
					<div className="flex flex-col items-center col-span-2 gap-y-4">
						<svg viewBox="0 0 14 21" className="w-16 ">
							<path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z"></path>
						</svg>
						<span className="text-2xl font-semibold select-none">
							Framer Motion
						</span>
					</div>
					<img src={leafletLogo} alt="" className="w-64 col-span-2 bg-white" />
				</div>
				<div className="my-32">
					<span className="text-3xl font-semibold">Quá trình xây dựng</span>
					<div className="flex flex-col items-center justify-center mt-24 select-none">
						<span className="text-6xl font-semibold text-text-primary">
							Tháng 11
						</span>
						<Timeline timeline={timeline}></Timeline>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
