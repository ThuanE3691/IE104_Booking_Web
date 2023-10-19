import homepage_bg from "@/Assets/homepage_bg2.jpg"

const SearchBar = () => {
  return (
    <div className=" h-[600px] relative mt-8">
      <div className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover rounded-2xl" style={{backgroundImage: `url(${homepage_bg})`}}></div>
      <div className="absolute flex flex-col text-gray-100 font-inter inset-y-20 inset-x-16">
        <p className="text-[80px] font-medium ">Air, sleep, <br /> dream</p>
        <p className="font-medium  text-[20px]">Find and book a great experience</p>
      </div>
    </div>
  )
}

export default SearchBar