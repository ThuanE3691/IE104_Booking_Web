import SVGRender from "@/Components/SVGRender";

const RightArrowSVG = ({ className }) => {
	return (
		<SVGRender className={className} viewBox="0 0 512 512">
			<path d="M173.5 82.4c-8.1 3.6-12.8 13.9-9.2 20.3.7 1.2 33.1 34.2 72.2 73.3l70.9 71.1-71.1 71.2c-78.7 78.8-74.5 73.8-70.8 83.2 1.9 5 7.3 10.1 11.8 11.1 8.1 1.7 4.5 5 88-78.4 42.8-42.7 78.5-78.9 79.3-80.4 1.8-3.5 1.8-9.1 0-12.6-1.8-3.3-156.2-157.5-159.3-159.1-2.9-1.5-8.1-1.3-11.8.3z" />
		</SVGRender>
	);
};

export default RightArrowSVG;
