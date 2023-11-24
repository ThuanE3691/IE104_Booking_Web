import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Routes/routes";
import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout";
import { Fragment } from "react";
import SearchContextProvider from "./Context/SearchContext";
import ScrollToTop from "./Components/Feature/Event/ScrollToTop";

function App() {
	return (
		<SearchContextProvider>
			<Router>
				<Routes>
					{routes.map((route, index) => {
						const Page = route.component;
						let Layout = DefaultLayout;

						if (route.layout) {
							Layout = route.layout;
						} else if (route.layout === null) {
							Layout = Fragment;
						}
						return (
							<Route
								path={route.path}
								key={index}
								element={
									<Layout>
										<ScrollToTop></ScrollToTop>
										<Page></Page>
									</Layout>
								}
							></Route>
						);
					})}
				</Routes>
			</Router>
		</SearchContextProvider>
	);
}

export default App;
