import Navbar from "@/Layouts/HomePage/Navbar"
import SearchBar from "@/Layouts/HomePage/SearchBar"

const HomePage = () => {
  return (
    <div className="w-full min-h-full px-20 py-8 bg-main-bg">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
    </div>
  )
}

export default HomePage