const SVGRender = ({ viewBox, children, ...parameters }) => {
	return (
		<svg {...parameters} viewBox={viewBox}>
			{children}
		</svg>
	);
};

export default SVGRender;
