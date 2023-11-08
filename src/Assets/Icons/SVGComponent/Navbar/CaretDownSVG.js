import SVGRender from "@/Components/Feature/Layout/SVGRender";

const CaretDownSVG = ({ className }) => {
	return (
		<SVGRender viewBox="0 0 512 512" className={className}>
			<path d="M23.5 113.4c-6.2 2-9.7 4.1-14.2 8.8C3.1 128.6.5 134.9.5 144c0 14.9-8.4 5.5 120.8 134.7S241.1 399.5 256 399.5c14.9 0 5.5 8.4 134.7-120.8C520 149.5 511.5 158.9 511.5 144c-.1-5.6-.6-8.8-2.3-12.6-2.9-6.3-10.1-13.6-16.7-16.6l-5-2.3-230-.2c-183.5-.1-230.8.1-234 1.1z" />
		</SVGRender>
	);
};

export default CaretDownSVG;
