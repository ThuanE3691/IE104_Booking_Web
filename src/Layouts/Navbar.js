import CurrencySVG from "@/Assets/Icons/SVG/CurrencySVG";
import DarkModeSVG from "@/Assets/Icons/SVG/DarkModeSVG";

import vnimg from "@/Assets/Images/vietnam.png";
// flex flex-row mx-14 gap-x-5
const Navbar = () => {
   return (
      <div className="flex flex-row mx-14 font-vietnam-pro items-center">
         <div className="flex flex-row w-3/5 gap-x-8">
            <div className="w-36 p-1.5 text-center cursor-pointer">Logo</div>
            <div className=" p-1.5 px-2.5 text-center hover:text-text-primary hover:font-semibold  cursor-pointer">
               Về chúng tôi
            </div>
            <div className=" p-1.5 px-2.5 text-center hover:text-text-primary hover:font-semibold cursor-pointer">
               Liên hệ
            </div>
            <div className=" p-1.5 text-center ml-3 font-bold hover:scale-110 hover:text-text-primary cursor-pointer">
               Trở Thành Đối Tác
            </div>
         </div>

         <div className="flex flex-row justify-between w-2/5 ml-auto items-center">
            <div className="flex flex-row gap-x-1.5">
               <div className="w-9 h-9 p-1.5 mx-3 fill-current hover:text-slate-500 cursor-pointer">
                  <DarkModeSVG></DarkModeSVG>
               </div>
               <div className="flex flex-row h-9 items-center gap-x-2 ">
                  <img
                     src={vnimg}
                     alt="Vietnam"
                     className="h-9 w-9 cursor-pointer"
                  />
                  <div className="w-0.5 h-6 mx-2.5 bg-black"></div>
                  <CurrencySVG className=" h-6 fill-current hover:text-slate-500 cursor-pointer"></CurrencySVG>
               </div>
            </div>

            <div className="flex flex-row gap-x-2">
               <div className="  bg-white  m-1 text-center px-3 py-2 hover:font-semibold hover:text-text-primary cursor-pointer">
                  Đăng nhập
               </div>
               <div className=" bg-button-primary text-white m-1 px-3 py-2 text-center rounded-lg hover:bg-slate-200 hover:text-black hover:border hover:border-black hover:font-semibold cursor-pointer ">
                  Đăng ký
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
