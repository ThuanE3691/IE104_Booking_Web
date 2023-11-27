import { BrowserRouter as Router } from "react-router-dom";
import SearchContextProvider from "./Context/SearchContext";
import routes from "@/Routes/routes";
import DefaultLayout from "@/Layouts/DefaultLayout/DefaultLayout";
import { Fragment } from "react";
import ScrollToTop from "@/Components/Feature/Event/ScrollToTop";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<SearchContextProvider>
			<Router>
				<Routes>
					{routes.map((route, index) => {
						const Page = route.component;
						let Layout = DefaultLayout;
						let position = {
							x: 0,
							y: 0,
						};

						if (route.layout) {
							Layout = route.layout;
						} else if (route.layout === null) {
							Layout = Fragment;
						}

						if (route.position) {
							position = route.position;
						}
						return (
							<Route
								path={route.path}
								key={index}
								element={
									<Layout>
										<ScrollToTop position={position}></ScrollToTop>
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
