const SVGRender = ({ viewBox, className, children }) => {
	return (
		<svg className={className} viewBox={viewBox}>
			{children}
		</svg>
	);
};

export default SVGRender;
