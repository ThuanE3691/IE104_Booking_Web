import { BrowserRouter as Router } from "react-router-dom";
import SearchContextProvider from "./Context/SearchContext";
import routes from "@/Routes/routes";
import DefaultLayout from "@/Layouts/DefaultLayout/DefaultLayout";
import ScrollToTop from "@/Components/Feature/Event/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import ConfigContextProvider from "./Context/ConfigContext";
import QueryContextProvider from "./Context/QueryContext";

function App() {
	return (
		<ConfigContextProvider>
			<QueryContextProvider>
				<SearchContextProvider>
					<Router>
						<Routes>
							{routes.map((route, index) => {
								const Page = route.component;

								let position = { x: 0, y: 0 };
								let showNav = true;
								if (route.showNav === false) {
									showNav = route.showNav;
								}

								return (
									<Route
										path={route.path}
										key={index}
										element={
											<DefaultLayout showNav={showNav}>
												<ScrollToTop
													defaultPosition={position}
													customPosition={route.position}
													isPageSave={route.isPageSave}
												></ScrollToTop>
												<Page></Page>
											</DefaultLayout>
										}
									></Route>
								);
							})}
						</Routes>
					</Router>
				</SearchContextProvider>
			</QueryContextProvider>
		</ConfigContextProvider>
	);
}

export default App;
