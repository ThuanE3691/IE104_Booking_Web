import SVGRender from "@/Components/Feature/Layout/SVGRender";

function VNFlagSVG({ className }) {
	return (
		<SVGRender className={className} viewBox="0 0 512 512">
			<path
				d="M0 256v171h512V85H0v171zm267.6-63.3 11 33.8 36.4.5 36.5.5-28.9
         21c-15.8 11.5-29 21.4-29.2 22-.2.5 4.6 16.1 10.6 34.5s10.8 33.6 10.6
         33.8c-.2.2-12-8.2-26.2-18.5-14.3-10.4-27.4-19.9-29.2-21.2l-3.2-2.3-29.1
         21.2c-16 11.6-29.3 21-29.5 20.8-.2-.2 4.6-15.4 10.6-33.8s10.8-34
         10.6-34.6c-.2-.6-13.4-10.5-29.2-22l-28.8-20.9 36.4-.5 36.4-.5
         11-33.8c6.1-18.5 11.3-33.7 11.6-33.7.3 0 5.5 15.2 11.6 33.7z"
			/>
		</SVGRender>
	);
}

export default VNFlagSVG;
