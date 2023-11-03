import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Routes/routes";
import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout";
import { Fragment } from "react";

function App() {
	return (
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
									<Page></Page>
								</Layout>
							}
						></Route>
					);
				})}
			</Routes>
		</Router>
	);
}

export default App;
