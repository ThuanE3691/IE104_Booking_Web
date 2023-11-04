import logo from "@IconCommon/Logo/travel.png";
import address from "@IconCommon/Static/location.png";
import phone_call from "@IconCommon/Static/phone-call.png";
import mail from "@IconCommon/Static/mail.png";
import youtube from "@IconCommon/Brands/youtube.png";
import facebook from "@IconCommon/Brands/facebook.png";
import instagram from "@IconCommon/Brands/instagram.png";
import github from "@IconCommon/Brands/github.png";
import visa from "@IconCommon/Brands/visa.png";
import paypal from "@IconCommon/Brands/paypal.png";
import momo from "@IconCommon/Brands/MoMo_Logo.png";
import mastercard from "@IconCommon/Brands/mastercard.png";
import booking from "@IconCommon/Brands/booking.png";
import trivago from "@IconCommon/Brands/trivago.png";
import traveloka from "@IconCommon/Brands/Traveloka_Logo.webp";
import agoda from "@IconCommon/Brands/agoda.jpg";
import partners from "@IconCommon/Static/partners.png";

const Footer = () => {
	return (
		<footer className="flex items-center justify-between px-32 py-16 text-lg border-t-2 border-slate-200 font-vietnam-pro">
			<div className="flex flex-col gap-y-3">
				<figure className="flex flex-col items-center cursor-pointer">
					<img src={logo} alt="Logo" className="w-16 h-16 select-none" />
					<figcaption className="mt-1 text-xl font-semibold text-blue-600">
						Travel
					</figcaption>
				</figure>
				<div className="flex items-center gap-6">
					<img src={address} alt="" className="w-6 h-6 select-none " /> Sân bay
					Tân Sơn Nhất
				</div>
				<div className="flex items-center gap-6">
					<img src={phone_call} alt="" className="w-6 h-6 select-none" />
					0123456789
				</div>
				<div className="flex items-center gap-6">
					<img src={mail} alt="" className="w-6 h-6 select-none" />{" "}
					20520313@gm.uit.edu.vn
				</div>
				<div className="flex items-center justify-center gap-5 mt-4">
					<a href="https://www.facebook.com/profile.php?id=100011163313117">
						<img src={facebook} alt="" className="w-6 h-6 select-none" />
					</a>
					<a href="https://www.instagram.com/thuwpink/">
						<img src={instagram} alt="" className="w-6 h-6 select-none" />
					</a>
					<a href="https://www.youtube.com/">
						<img src={youtube} alt="" className="w-6 h-6 select-none " />
					</a>
					<a href="https://www.youtube.com/">
						<img src={github} alt="" className="h-6 select-none w -6" />
					</a>
				</div>
				<div className="text-sm translate-y-10 ">
					Bản quyền &copy;2023 Travel. Bảo lưu mọi quyền
				</div>
			</div>
			<ul className="flex flex-col gap-4">
				<li className="font-semibold ">Về Travel</li>
				<li className="cursor-pointer">Làm sao đặt khách sạn</li>
				<li className="cursor-pointer">Liên hệ</li>
				<li className="cursor-pointer">Trung tâm giúp đỡ</li>
				<li className="cursor-pointer">Về chúng tôi</li>
			</ul>
			<ul className="flex flex-col gap-4">
				<li className="font-semibold ">Dịch vụ</li>
				<li className="cursor-pointer">Đặt khách sạn</li>
				<li className="cursor-pointer">Blog</li>
				<li className="cursor-pointer">Đặt xe</li>
				<li className="cursor-pointer">Đặt vé máy bay</li>
			</ul>
			<div className="flex flex-col items-center gap-y-6">
				<div className="flex flex-col items-center font-semibold gap-y-4">
					<p>Đối tác thanh toán</p>
					<ul className="flex items-center justify-center gap-4">
						<li className="px-4 py-2 bg-white border-2">
							<img src={visa} alt="" className="w-6 h-6 select-none " />
						</li>
						<li className="px-4 py-2 border-2">
							<img src={mastercard} alt="" className="w-6 h-6 select-none " />
						</li>
						<li className="px-4 py-2 border-2">
							<img src={paypal} alt="" className="w-6 h-6 select-none " />
						</li>
						<li className="px-4 py-2 border-2">
							<img src={momo} alt="" className="w-6 h-6 select-none " />
						</li>
					</ul>
				</div>
				<div className="flex flex-col items-center font-semibold">
					<p>Đối tác dịch vụ</p>
					<div className="flex items-center mt-4">
						<div className="px-4 py-2 text-center">
							<img
								src={booking}
								alt=""
								className="object-contain w-24 select-none "
							/>
						</div>
						<div className="px-4 py-2 ">
							<img
								src={trivago}
								alt=""
								className=" select-none object-contain w-[54px]"
							/>
						</div>
						<div className="px-4 py-0.5">
							<img
								src={traveloka}
								alt=""
								className="object-contain w-16 select-none "
							/>
						</div>
						<div className="px-4 py-[7px]">
							<img
								src={agoda}
								alt=""
								className=" select-none object-contain w-[52px]"
							/>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-4 px-4 py-2 transition-colors border-2 border-dashed rounded-xl hover:border-blue-600">
					<img src={partners} alt="" className="w-8 h-8 select-none " />
					<span className="font-semibold">Hợp tác với chúng tôi</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
