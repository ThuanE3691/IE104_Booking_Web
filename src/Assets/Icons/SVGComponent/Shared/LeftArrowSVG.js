import SVGRender from "@/Components/Feature/Layout/SVGRender";

const LeftArrowSVG = ({ className }) => {
	return (
		<SVGRender className={className} viewBox="0 0 512 512">
			<path d="M317.2 75.5c-1.9.8-35.7 33.8-82.2 80.2-69.2 69.1-79 79.3-79.9 82.8-2.3 9.1-5.8 5.1 78.2 89.3 43.3 43.3 78.7 77.9 80.6 78.8 9 4.3 22.1-4.5 22.1-14.9 0-2.1-.6-5-1.4-6.5-.8-1.5-23.4-24.5-50.1-51.2-26.7-26.7-58.1-58.3-69.7-70.3L193.7 242l71.4-71.5c39.2-39.3 72-72.7 72.7-74.1 3.4-6.6-1.2-16.9-9.2-20.5-4.9-2.2-7-2.3-11.4-.4z" />
		</SVGRender>
	);
};

export default LeftArrowSVG;
