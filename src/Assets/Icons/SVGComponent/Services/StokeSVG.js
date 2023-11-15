import SVGRender from "@/Components/Feature/Layout/SVGRender";

const StokeSVG = ({ className }) => {
	return (
		<SVGRender viewBox="0 0 512 512" className={className}>
			<path d="M138.4 90.5c-2.4 2.4-2.4 2.8-1.8 11.8.9 12.6 0 15-9.8 25.3-5.3 5.7-9 10.7-11.1 15.2-2.9 6.1-3.2 7.5-3.2 16.7 0 9.1.3 10.6 3.1 16.5 1.7 3.6 4.6 8.3 6.5 10.5 4.1 4.6 11.5 9.5 14.5 9.5 2.5 0 7.4-3.6 7.4-5.4 0-2.1 6.9-15.6 8-15.6 1.1 0 8 13.5 8 15.6 0 1.8 4.9 5.4 7.4 5.4 3 0 10.4-4.9 14.5-9.5 20.9-23.9 7.7-67-28.9-93.9-7.2-5.3-10.8-5.9-14.6-2.1zm30.5 43.7c4.6 9.3 7.5 21 6.9 27.8-.5 4.4-3.4 12-4.7 12-.3 0-2.6-3.4-5.1-7.6-11.5-19.3-16.5-19.3-28 0-2.5 4.2-4.8 7.6-5.1 7.6-2 .1-4.4-8-4.4-14.5 0-8.9 2.1-13.2 9.8-20.5 6.9-6.5 10.9-12.5 13.3-19.9l1.7-5.4 5.8 6.1c3.6 3.8 7.3 9.2 9.8 14.4zM346.4 90.5c-2.4 2.4-2.4 2.8-1.8 11.8.9 12.6 0 15-9.8 25.3-5.3 5.7-9 10.7-11.1 15.2-2.9 6.1-3.2 7.5-3.2 16.7 0 9.1.3 10.6 3.1 16.5 1.7 3.6 4.6 8.3 6.5 10.5 4.1 4.6 11.5 9.5 14.5 9.5 2.5 0 7.4-3.6 7.4-5.4 0-2.1 6.9-15.6 8-15.6 1.1 0 8 13.5 8 15.6 0 1.8 4.9 5.4 7.4 5.4 3 0 10.4-4.9 14.5-9.5 20.9-23.9 7.7-67-28.9-93.9-7.2-5.3-10.8-5.9-14.6-2.1zm30.5 43.7c4.6 9.3 7.5 21 6.9 27.8-.5 4.4-3.4 12-4.7 12-.3 0-2.6-3.4-5.1-7.6-11.5-19.3-16.5-19.3-28 0-2.5 4.2-4.8 7.6-5.1 7.6-2 .1-4.4-8-4.4-14.5 0-8.9 2.1-13.2 9.8-20.5 6.9-6.5 10.9-12.5 13.3-19.9l1.7-5.4 5.8 6.1c3.6 3.8 7.3 9.2 9.8 14.4zM96 217.3c-4.9 1.6-13.3 10.2-14.8 15.3-.7 2.3-1.2 6.7-1.2 9.8v5.6H68.4c-14.1 0-19.1 1.2-24.4 5.7-5.3 4.5-5.8 5.8-17.9 37.9l-10.1 27V345c0 17.7.4 27.6 1.2 30.4 2.3 7.8 13.5 16.6 21.2 16.6 1.4 0 1.6 1.7 1.6 13.5 0 13.1.1 13.7 2.5 16l2.4 2.5h54.2l2.4-2.5c2.4-2.3 2.5-2.9 2.5-16V392h304v13.5c0 13.1.1 13.7 2.5 16l2.4 2.5h54.2l2.4-2.5c2.4-2.3 2.5-2.9 2.5-16 0-12.4.1-13.5 1.8-13.5 1 0 3.9-.7 6.5-1.6 5.7-1.9 12.8-9.3 14.5-15.2.8-2.6 1.2-12.8 1.2-30.2v-26.4l-10.1-27c-11.4-30.5-12.1-32-15.8-35.9-5.4-5.9-9.3-7.1-24.3-7.5l-13.8-.4v-5.5c0-8.6-1.8-13.2-7.5-18.8-5.9-5.9-10.2-7.5-20.4-7.5-6.3 0-7.5.3-9.6 2.5-1.6 1.5-2.5 3.6-2.5 5.5s.9 4 2.5 5.5c2.1 2.2 3.3 2.5 9.5 2.5s7.4.3 9.5 2.5c2.1 2 2.5 3.4 2.5 8v5.5h-48v-13.5c0-13.1-.1-13.7-2.5-16-3.2-3.3-7.8-3.3-11 0-2.4 2.3-2.5 2.9-2.5 16V248h-48v-5.5c0-4.6.4-6 2.5-8 2.1-2.2 3.3-2.5 9.5-2.5s7.4-.3 9.5-2.5c1.6-1.5 2.5-3.6 2.5-5.5s-.9-4-2.5-5.5c-2.1-2.2-3.3-2.5-9.6-2.5-10.2 0-14.5 1.6-20.4 7.5-5.7 5.6-7.5 10.2-7.5 18.9v5.6h-64v-5.6c0-8.7-1.8-13.3-7.5-18.9-5.9-5.9-10.2-7.5-20.4-7.5-6.3 0-7.5.3-9.6 2.5-1.6 1.5-2.5 3.6-2.5 5.5s.9 4 2.5 5.5c2.1 2.2 3.3 2.5 9.5 2.5s7.4.3 9.5 2.5c2.1 2 2.5 3.4 2.5 8v5.5h-48v-13.5c0-13.1-.1-13.7-2.5-16-1.5-1.6-3.6-2.5-5.5-2.5s-4 .9-5.5 2.5c-2.4 2.3-2.5 2.9-2.5 16V248H96v-5.5c0-4.6.4-6 2.5-8 2.1-2.2 3.3-2.5 9.5-2.5s7.4-.3 9.5-2.5c1.6-1.5 2.5-3.6 2.5-5.5s-.9-4-2.5-5.5c-2.2-2.3-3.2-2.5-10.2-2.4-4.3.1-9.4.6-11.3 1.2zm362.2 49c1.1 1.2 6.5 14.1 11.9 28.6l9.9 26.4v49.8l-2.5 2.4-2.4 2.5H36.9l-2.4-2.5-2.5-2.4v-49.8l10-26.9c6.2-16.6 10.9-27.6 12.2-28.7 1.9-1.6 13-1.7 202-1.7h200l2 2.3zM88 400v8H56v-16h32v8zm368 0v8h-32v-16h32v8z" />
			<path d="M142.6 281c-6.3 1.6-15.3 7-19.7 11.7-2.2 2.4-5.5 7.4-7.2 11.1-2.9 6.1-3.2 7.6-3.2 16.3 0 9 .2 9.9 3.7 17.1 4.5 9.1 10.3 14.7 19.6 19.1 6.1 2.9 7.6 3.2 16.2 3.2s10.1-.3 16.2-3.2c9.3-4.4 15.1-10 19.6-19.1 3.5-7.2 3.7-8.1 3.7-17.2s-.2-10-3.7-17.2c-6.8-13.6-18.8-21.7-33.6-22.4-4.2-.2-9.4.1-11.6.6zm1.4 29.5c0 12 .1 12.7 2.5 15 1.5 1.6 3.6 2.5 5.5 2.5s4-.9 5.5-2.5c2.4-2.3 2.5-3 2.5-15 0-6.9.2-12.5.5-12.5 1.9 0 6.8 3.5 9.7 7 8.4 9.7 7.7 22.2-1.7 31.5-10.1 10.2-22.9 10.2-33 0-9.2-9.1-10.1-21.5-2.2-31.1 2.8-3.4 8.2-7.4 10-7.4.4 0 .7 5.6.7 12.5zM350.6 281c-6.3 1.6-15.3 7-19.7 11.7-2.2 2.4-5.5 7.4-7.2 11.1-2.9 6.1-3.2 7.6-3.2 16.3 0 9 .2 9.9 3.7 17.1 4.5 9.1 10.3 14.7 19.6 19.1 6.1 2.9 7.6 3.2 16.2 3.2s10.1-.3 16.2-3.2c9.3-4.4 15.1-10 19.6-19.1 3.5-7.2 3.7-8.1 3.7-17.2s-.2-10-3.7-17.2c-6.8-13.6-18.8-21.7-33.6-22.4-4.2-.2-9.4.1-11.6.6zm1.4 29.5c0 12 .1 12.7 2.5 15 1.5 1.6 3.6 2.5 5.5 2.5s4-.9 5.5-2.5c2.4-2.3 2.5-3 2.5-15 0-6.9.2-12.5.5-12.5 1.9 0 6.8 3.5 9.7 7 8.4 9.7 7.7 22.2-1.7 31.5-10.1 10.2-22.9 10.2-33 0-9.2-9.1-10.1-21.5-2.2-31.1 2.8-3.4 8.2-7.4 10-7.4.4 0 .7 5.6.7 12.5z" />
		</SVGRender>
	);
};

export default StokeSVG;
