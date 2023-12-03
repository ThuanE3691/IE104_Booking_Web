import Navbar from "../Shared/Common/Navbar";
import Footer from "../Shared/Common/Footer";

const DefaultLayout = ({ showNav, children }) => {
	return (
		<>
			<Navbar showNav={showNav}></Navbar>
			{children}
			<Footer></Footer>
		</>
	);
};

export default DefaultLayout;
