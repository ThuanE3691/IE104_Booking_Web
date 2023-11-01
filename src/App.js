import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/Views/HomePage";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/HomePage/Footer";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Navbar></Navbar>
							<HomePage />
							<Footer></Footer>
						</>
					}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
