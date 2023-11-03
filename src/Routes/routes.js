// Route
import config from "@/Config";

// Page
import Home from "@/Views/Home";

import { Fragment } from "react";

const routes = [
	{ path: config.routes.home, component: Home },
	{ path: config.routes.search, component: Fragment },
	{ path: config.routes.hotel, component: Fragment },
	{ path: config.routes.about, component: Fragment },
	{ path: config.routes.contact, component: Fragment },
];

export default routes;
