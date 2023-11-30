// Route
import config from "@/Config";

// Page
import Home from "@/Views/Home";
import HotelDetails from "@/Views/HotelDetails";
import PayBooking from "@/Views/PayBooking";
import Search from "@/Views/Search";

import { Fragment } from "react";

const routes = [
	{ path: config.routes.home, component: Home },
	{ path: config.routes.search, component: Search, isPageSave: true },
	{
		path: config.routes.hotel,
		component: HotelDetails,
		position: {
			x: 0,
			y: 244,
		},
	},
	{ path: config.routes.payment, component: PayBooking },
	{ path: config.routes.about, component: Fragment },
	{ path: config.routes.contact, component: Fragment },
];

export default routes;
