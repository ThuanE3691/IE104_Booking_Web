import Navbar from "../Shared/Common/Navbar";
import Footer from "../Shared/Common/Footer";

const DefaultLayout = ({ children }) => {
	return (
		<>
			<Navbar></Navbar>
			{children}
			<Footer></Footer>
		</>
	);
};

export default DefaultLayout;
