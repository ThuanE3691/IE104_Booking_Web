import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ConfigContext } from "@/Context/ConfigContext";

const ScrollToTop = ({ defaultPosition, customPosition, isPageSave }) => {
	// Extracts pathname property(key) from an object
	const { pathname } = useLocation();
	const { scrollHistory } = useContext(ConfigContext);

	// Automatically scrolls to top whenever pathname changes
	useEffect(() => {
		if (isPageSave) window.scrollTo(scrollHistory.x, scrollHistory.y);
		else if (customPosition)
			window.scrollTo(customPosition.x, customPosition.y);
		else window.scrollTo(defaultPosition.x, defaultPosition.y);
	}, [pathname]);
};

export default ScrollToTop;
