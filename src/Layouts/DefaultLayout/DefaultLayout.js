import Navbar from "../Navbar";
import Footer from "../Footer";

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
