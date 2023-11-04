import SVGRender from "@/Components/Feature/Layout/SVGRender";

function DarkModeSVG({ className }) {
	return (
		<SVGRender className={className} viewBox="0 0 512 512">
			<path d="M234.5 49.1c-39.3 4.1-79.3 20.8-110.1 46-53.5 43.7-82.2 112.7-75.4 181C56.3 348 100 411 164.5 442.6c49.3 24.1 104.5 27.9 156.5 10.8 78.1-25.7 133.7-95.1 142-177.3 5.4-53.8-11.5-109.3-46.2-151.9C373 70.6 303.4 41.9 234.5 49.1zM240 256v175h-2.2c-1.3 0-6.3-.7-11.3-1.6-72.9-12.6-129.9-69-143.7-142.2-3.2-16.8-3.2-45.6 0-62.4 10.5-55.6 45.3-101.5 96.1-126.8 16.7-8.3 44.8-16.5 57.9-16.9l3.2-.1v175z" />
		</SVGRender>
	);
}

export default DarkModeSVG;
