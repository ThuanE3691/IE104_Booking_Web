import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ position }) => {
	// Extracts pathname property(key) from an object
	const { pathname } = useLocation();

	// Automatically scrolls to top whenever pathname changes
	useEffect(() => {
		window.scrollTo(position.x, position.y);
	}, [pathname]);
};

export default ScrollToTop;
