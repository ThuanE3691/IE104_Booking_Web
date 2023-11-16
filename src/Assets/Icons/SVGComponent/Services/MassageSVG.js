import SVGRender from "@/Components/Feature/Layout/SVGRender";

const MassageSVG = ({ ...parameters }) => {
	return (
		<SVGRender version="1.0" viewBox="0 0 512 512" {...parameters}>
			<path d="M240.3 1.4c-10.3 2-19.4 5.2-30.5 10.7-11.4 5.6-18.5 10.3-31.6 20.9C160 47.6 155.9 53.9 161 59c3.9 3.9 7.4 2.7 16.8-5.8C200 33.3 216 23.4 235.5 17.8c12-3.4 30-3.2 40.6.5 4.2 1.4 9.3 3.6 11.5 4.9l3.9 2.3-7 .6c-12.3 1-24.3 5.6-36.6 13.9-7.8 5.3-16.2 12.7-17.6 15.5-1.8 3.4 0 8 3.8 9.5 3.7 1.6 5.8.7 12.5-5.1 8.3-7.2 19-13.6 27.5-16.4 7.2-2.4 9.2-2.7 17.7-2.3 14 .7 17.9 2.6 21.8 10.9 2.6 5.8 2.9 7.3 2.8 16.9 0 9.2-.3 11.2-2.6 16.2-3.7 8.1-8.1 14.2-16.2 22.7-17.5 18.3-43.2 35.4-83 55.3-10 5-22.1 11.8-27 15.2-15.6 10.6-31.8 28.3-39.2 42.8-1.3 2.7-2.9 4.8-3.4 4.8-.8 0-11.8-5.9-20-10.8-1.2-.8-1.6-4.6-1.9-21.7-.5-29.1 2-47 9.6-70 4.5-13.6 8.5-22.4 15.7-34.5 3.1-5.2 5.6-10.5 5.6-11.8 0-2.6-4.1-7.2-6.4-7.2-5.6 0-11.8 8.4-21.5 29.3-13.1 27.9-18.5 55.8-17.9 92.9l.3 21.8H100V126.3l-2.3-2.1c-2.9-2.7-6.7-2.8-9.8-.3l-2.4 1.9-.3 46.9c-.3 48.1 0 53.3 3.6 54.9.9.5 8.5 1.1 16.8 1.4l15 .5 8.2 4.9c9.3 5.7 30.1 20.8 31.9 23.3 3.2 4.2 0 11.3-5 11.3-1.2 0-12.1-4.5-24.2-10s-23.1-10-24.5-10c-4 0-9.2 3.4-11.2 7.1-2.2 4.4-4.2 31.3-2.7 38 3.4 14.9 25.9 39.7 57.1 62.8 7.7 5.7 9.8 7.7 9.8 9.6 0 6.8-12.9 7.9-29 2.5-44.6-15.1-74.9-39.6-84.8-68.7l-2.7-7.8-.5-85.1c-.5-82-.6-85.3-2.4-87.3-2.5-2.8-7.9-2.8-10.6-.1-2 2-2.1 2.7-1.8 88.3l.3 86.2 2.3 7.4c4.9 16.1 13.2 29 26.9 42.2 22.6 21.8 66.7 42.9 90.1 43.2 10 .1 15.3-1.5 20.4-6.1 10.2-9.2 9-22.5-2.8-31.4-23.6-17.8-37.8-30.6-47.3-42.2-10.1-12.5-10.5-13.6-10.3-25.1.1-5.5.4-11.6.8-13.6l.5-3.7 19.7 9.2c18.9 8.7 20 9.1 26.8 9.1 6 0 7.6-.4 11.2-2.8 6.5-4.2 9.6-9.7 10-17.6.5-10-3.4-16-16.7-25.3-2.2-1.6-2.3-1.9-1.1-4.9 3.9-9.2 15.6-24.3 26.4-33.8 9.6-8.3 15.7-12.1 38.6-23.8 22.6-11.5 34.7-18.4 46.7-26.5 4-2.6 7.8-4.8 8.6-4.8 2.3 0 21.3 9.6 27.9 14.2 20.4 13.8 36.9 36.7 46.4 64.4l3.8 10.8-3.9 3c-12 9.6-14.1 11.5-16.2 15.6-2 3.7-2.4 5.6-2.1 11.1.4 7.9 3.5 13.4 10 17.6 3.6 2.4 5.2 2.8 11.2 2.8 6.8 0 7.9-.4 26.8-9.1l19.7-9.2.5 3.7c.4 2 .7 8.1.8 13.6.2 11.5-.2 12.6-10.3 25.1-9.5 11.6-23.7 24.4-47.3 42.2-11.8 8.9-13 22.2-2.8 31.4 9.8 8.8 26.8 8.2 52.4-1.8 23.6-9.3 43.9-21.6 58.1-35.3 13.7-13.2 22-26.1 26.9-42.2l2.3-7.4.3-86.2c.3-85.6.2-86.3-1.8-88.3-2.7-2.7-8.1-2.7-10.6.1-1.8 2-1.9 5.3-2.4 87.3l-.5 85.1-2.7 7.8c-9.9 29.1-40.1 53.6-84.8 68.7-16.1 5.4-29 4.3-29-2.5 0-1.9 2.1-3.9 9.8-9.6 31.2-23.1 53.7-47.9 57.1-62.8 1.5-6.7-.5-33.6-2.7-38-2-3.7-7.2-7.1-11.2-7.1-1.4 0-12.4 4.5-24.5 10s-23 10-24.2 10c-5.4 0-8.4-7.9-4.5-11.8 2.7-2.7 16.7-13.2 25.5-19.1 12.8-8.6 14.3-9.1 29.4-9.1 15.3 0 17.9-.8 19.4-5.9.6-2.4.9-19.9.7-50.4l-.3-46.9-2.4-1.9c-3.2-2.6-7.3-2.4-9.9.4-2.2 2.3-2.2 2.5-2.2 46V214h-6c-3.3 0-6-.3-6-.8 0-.4.7-4.5 1.5-9.2 3.9-22.1.1-41.8-10.3-53.2-3.8-4.2-3.9-4.6-4.5-13.3-1.4-20.2-10-42.6-21.3-55.5-7.1-8.2-17.1-15.7-26.6-20.3l-7.4-3.5-1.9-6.1c-3.3-10.9-9-19.8-19-29.7-7.6-7.5-10.7-9.8-18.6-13.6-5.2-2.6-12.3-5.4-15.9-6.3-9-2.2-26.8-2.8-35.7-1.1zm107.8 84.5c11.5 10.3 18.7 24.2 22.3 42.8l1.3 7.1-3.3-1.6c-4.2-2-8.2-.8-10.3 2.9-2.7 4.8-1 7.2 11.3 15.9 12.5 8.8 14.8 11.6 17.3 21.4 1.9 7.5 1.3 23.3-1.3 34.8l-1.7 7.8-6.4 3.5c-3.5 1.9-6.5 3.5-6.8 3.5-.2 0-.9-1.7-1.6-3.8-11.8-36.5-35.7-66-67.2-82.7l-8.7-4.7 5.8-5.1c17.7-16 29.2-32.9 32.2-47.3l1.1-5.4 5 2.7c2.8 1.6 7.7 5.2 11 8.2z" />
			<path d="M349.9 296.2c-.9.7-3.6 4.7-6.2 8.8-22 36.1-66.2 58.5-101.9 51.6-28.4-5.5-55.4-24-72.3-49.6-6.4-9.7-7.8-11-11.6-11-2.7 0-6.9 4.4-6.9 7.2 0 3.3 8.5 16.8 16.4 26.1 7.8 9 17 16.9 27.9 24l7.7 5-.2 16.6-.3 16.6-22.3 5.7c-12.2 3.1-24.7 6.8-27.7 8.2-21.6 9.9-37.5 30.1-41.4 52.6-1.2 7.2-3.1 33.6-3.1 43.5 0 5.7.3 6.6 2.6 8.4l2.7 2.1h285.4l2.8-2.2 2.8-2.2-.7-15.5c-1.4-32.1-3.2-41.9-10.3-55.3-4.8-9.2-8.2-12.8-12.2-12.8-3.6 0-7.1 3.3-7.1 6.9 0 1.4 1.8 5.4 4 9.1 7 11.7 8.6 18.6 10.5 47.8l.7 9.2H122.9l.6-9.7c2.3-35.4 5.6-44.8 20.1-58.1 9.2-8.5 15.9-11.3 43-18.1 13.7-3.4 24.8-6.8 26.3-7.9 4.1-3 5-7.3 5-23.5.1-14.3.2-14.7 2-13.7 1.1.5 6.2 2.2 11.3 3.6 13.7 3.7 29.1 4.3 42.6 1.5 5.7-1.2 12.6-3 15.3-4l4.9-1.9v15.6c0 16.8.5 19.1 5.1 22.4 1.4 1.1 13.4 4.7 27 8.3 13.4 3.4 26.3 6.9 28.6 7.6 3.6 1.1 4.4 1 6.7-.4 3.3-2.2 4.4-6.3 2.5-9.6-2-3.6-8.8-6.1-33.6-12.3l-21.3-5.3v-33.2l7.8-5c11.3-7.5 20.3-15.3 28.1-24.4 7.2-8.6 17.1-24.1 17.1-26.9 0-1-.9-2.9-2.1-4.4-2.3-2.9-7.3-3.6-10-1.4z" />
		</SVGRender>
	);
};

export default MassageSVG;
