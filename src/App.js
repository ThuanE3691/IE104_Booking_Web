import { BrowserRouter as Router } from "react-router-dom";
import SearchContextProvider from "./Context/SearchContext";
import routes from "@/Routes/routes";
import DefaultLayout from "@/Layouts/DefaultLayout/DefaultLayout";
import { Fragment } from "react";
import ScrollToTop from "@/Components/Feature/Event/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import ConfigContextProvider from "./Context/ConfigContext";

function App() {
	return (
		<ConfigContextProvider>
			<SearchContextProvider>
				<Router>
					<Routes>
						{routes.map((route, index) => {
							const Page = route.component;

							let position = { x: 0, y: 0 };
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
											<ScrollToTop
												defaultPosition={position}
												customPosition={route.position}
												isPageSave={route.isPageSave}
											></ScrollToTop>
											<Page></Page>
										</Layout>
									}
								></Route>
							);
						})}
					</Routes>
				</Router>
			</SearchContextProvider>
		</ConfigContextProvider>
	);
}

export default App;
