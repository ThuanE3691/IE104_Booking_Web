import SVGRender from "@/Components/SVGRender";

const CitySVG = ({ className }) => {
	return (
		<SVGRender className={className} viewBox="0 0 512 512">
			<path d="m210.3 2.4-2.8 2.4-.3 15.1-.3 15.1H187c-10.9 0-20.6.3-21.5.6-3.8 1.5-4.5 5.5-4.5 25.9V81h-14.8C125 81 127 76.6 127 123.3v37.6l-38.1.3-38.1.3-2.4 2.8-2.4 2.8V495h-8.7c-9.1.1-11 .7-13.1 4.7-1.9 3.5-1.4 6.3 1.7 9.4l2.9 2.9h454.4l2.9-2.9c3.1-3.1 3.6-5.9 1.7-9.4-2.1-4-4-4.6-13-4.7H466V268.5c0-242.1.2-231.1-4.5-232.9-.9-.3-39.4-.6-85.4-.6h-83.8l-1.9 2.1c-1.7 1.9-2 4.3-2.4 22.8l-.5 20.6h-17l-.3-20.6c-.3-27 1.9-24.8-25.2-25.1l-20.5-.3-.3-14c-.2-14.8-.9-17.6-4.9-19.4-3.6-1.7-5.9-1.3-9 1.3zM253 66.5V81l-37.2-.2-37.3-.3-.3-14.3-.3-14.2H253v14.5zm196 207V495l-31.7-.2-31.8-.3-.2-117.5c-.2-86-.6-118.1-1.4-119.7-1.5-2.8-6.1-4.7-9.1-3.8-3.8 1.2-5.8 3.6-6.4 7.7l-.7 3.8h-16.4l-.7-3.8c-1.7-11-15.5-10.4-16.8.8l-.3 2.5-14.2.3-14.3.3V52h144v221.5zm-161.2-92.3-.3 83.3h-63l-.3-14.3-.3-14.2h13.8c15.1 0 17.9-.8 20.1-5.4 1.6-3.3.9-7-1.9-9.4-1.6-1.4-4.7-1.8-16.7-2.2l-14.7-.5-.3-14.3-.3-14.2h13.8c15.1 0 17.9-.8 20.1-5.4 1.6-3.3.9-7-1.9-9.4-1.6-1.4-4.7-1.8-16.7-2.2l-14.7-.5-.3-2.5c-.4-3.9-2.2-6.7-4.9-7.9-1.6-.7-14.3-1.1-38.8-1.1H144V98h144l-.2 83.2zM207 336.5V495h-39.9l-.3-20.4c-.3-20.1-.3-20.5-2.7-23l-2.4-2.6h-26.3c-24.3 0-26.3.1-28.5 1.9-2.4 1.9-2.4 2.3-2.9 22.8l-.5 20.8-20.2.3-20.3.2V337.2c0-86.8.3-158.2.7-158.5.3-.4 32.7-.7 72-.7H207v158.5zm161 52V495l-71.7-.2-71.8-.3-.3-106.3L224 282h144v106.5zm-218.2 91.7-.3 14.3-2.6.3-2.7.3-.3-9c-.4-7.8-.7-9.3-2.8-11.5-3-3.2-7.8-3.4-11.2-.7-2.1 1.7-2.5 3-2.9 11.3-.5 9.3-.5 9.3-3.2 9.6l-2.8.3V466h29.1l-.3 14.2z" />
			<path d="M336.5 83.5c-2.3 2.2-2.5 3.2-2.5 11.5s.2 9.3 2.5 11.5c4.1 4.2 10.5 3.1 13.3-2.2 1.7-3.1 1.5-15.8-.3-19.2-2.5-4.9-9-5.7-13-1.6zM371.2 83c-4.3 4-4.4 19-.2 23.5 3.2 3.4 8.2 3.4 11.5 0 2.3-2.2 2.5-3.2 2.5-11.8 0-8.5-.2-9.6-2.3-11.5-3-2.8-8.6-2.9-11.5-.2zM405.5 83.5c-2.3 2.2-2.5 3.2-2.5 11.5s.2 9.3 2.5 11.5c4.1 4.2 10.5 3.1 13.3-2.2 1.7-3.1 1.5-15.8-.3-19.2-2.5-4.9-9-5.7-13-1.6zM338.5 139.2c-3.8 2.2-4.4 4.1-4.4 13.3 0 10 .8 11.9 5.7 13.6 2.3.8 3.8.7 5.9-.3 4.3-2 5.4-5.2 5.1-14.5-.2-6.7-.7-8.6-2.3-10.2-2.5-2.6-7.4-3.5-10-1.9zM373 139.3c-1.3.7-3 2.4-3.7 3.7-1.6 3.2-1.6 15.8 0 19 1.9 3.7 6.1 5.4 9.9 4.1 4.9-1.7 5.7-3.7 5.8-13.3 0-10.2-.4-11.4-4.1-13.3-3.4-1.8-4.7-1.8-7.9-.2zM407.5 139.2c-3.8 2.2-4.4 4.1-4.5 13.4 0 8.4.2 9.2 2.5 11.4 3.4 3.2 8.7 3.2 11.8.2 1.9-1.9 2.3-3.6 2.5-11.1.4-8 .2-9-2-11.4-2.7-3.1-7.4-4.3-10.3-2.5zM336.5 198.5c-2.3 2.2-2.5 3.2-2.5 11.5s.2 9.3 2.5 11.5c1.6 1.7 3.5 2.5 5.7 2.5 6.4-.1 8.8-3.9 8.8-14s-2.4-13.9-8.8-14c-2.2 0-4.1.8-5.7 2.5zM371.8 197.4c-2.6 1.9-3.8 6-3.8 12.6 0 9.8 2.6 13.9 8.8 14 2.2 0 4.1-.8 5.7-2.5 2.3-2.2 2.5-3.2 2.5-11.5s-.2-9.3-2.5-11.5c-2.7-2.8-7.9-3.3-10.7-1.1zM405.5 198.5c-2.3 2.2-2.5 3.2-2.5 11.5s.2 9.3 2.5 11.5c4.1 4.2 10.5 3.1 13.3-2.2 1.7-3.1 1.5-15.8-.3-19.2-2.5-4.9-9-5.7-13-1.6zM407.5 254.2c-1.1.6-2.5 1.9-3.2 2.7-1.7 2.1-1.7 19.1 0 21.2 3.5 4.6 10.1 4.7 13.7.2 1.6-2.1 2-4.1 2-10.9 0-7.2-.3-8.6-2.2-10.8-2.7-3-7.4-4.1-10.3-2.4zM405.5 313.5c-2.3 2.2-2.5 3.2-2.5 11.5s.2 9.3 2.5 11.5c4 4.1 10.5 3.3 13-1.6 1.8-3.4 2-16.1.3-19.2-2.8-5.3-9.2-6.4-13.3-2.2zM409 368.7c-.8.3-2.5 1.5-3.7 2.6-2.1 1.8-2.3 3-2.3 11.1.1 9.4.7 11.3 4.7 13.4 3.5 1.9 6.3 1.4 9.5-1.8 3-3 3-3.2 2.6-12-.2-7.3-.7-9.3-2.3-10.9-2.2-2.2-6.2-3.3-8.5-2.4zM405.5 428.5c-2.3 2.2-2.5 3.2-2.5 11.5s.2 9.3 2.5 11.5c4 4.1 10.5 3.3 13-1.6 1.8-3.4 2-16.1.3-19.2-2.8-5.3-9.2-6.4-13.3-2.2zM175.2 129.3c-2.5 2.6-2.9 8.2-.8 10.9 2.6 3.5 6.3 3.8 41.9 3.8 38 0 39.1-.2 41.5-5.4 1.7-3.3.9-6.9-2-9.6-2.1-1.9-3.4-2-40.3-2h-38.2l-2.1 2.3zM96.2 219.7c-3.8 1.5-5.9 17.2-3 22.6 2.8 5.3 9.2 6.4 13.3 2.2 2.3-2.2 2.5-3.2 2.5-11.5s-.2-9.3-2.5-11.5c-2.3-2.4-6.9-3.2-10.3-1.8zM129.5 221.5c-2.3 2.2-2.5 3.2-2.5 11.5s.2 9.3 2.5 11.5c1.6 1.7 3.5 2.5 5.7 2.5 6.2-.1 8.8-4.2 8.8-14s-2.6-13.9-8.8-14c-2.2 0-4.1.8-5.7 2.5zM164.9 220.3c-2.9 2.2-3.9 5.5-3.9 12.7 0 10.1 2.4 13.9 8.8 14 2.2 0 4.1-.8 5.7-2.5 2.3-2.2 2.5-3.2 2.5-11.5s-.2-9.3-2.5-11.5c-2.7-2.7-7.9-3.3-10.6-1.2zM97.4 277c-4.1 1.6-5.4 4.9-5.4 13.6 0 6.6.4 8.6 2 10.7 3.6 4.5 10.2 4.4 13.7-.2 1.7-2.1 1.7-19.1 0-21.2-2.6-3.4-6.4-4.5-10.3-2.9zM131.5 277.2c-3.8 2.2-4.4 4.1-4.5 13.4 0 7.7.3 9.3 2 11.2 2.7 2.9 6.3 3.7 9.6 2 4.4-2 5.5-5.2 5.2-14.5-.2-6.7-.7-8.6-2.3-10.2-2.5-2.6-7.4-3.5-10-1.9zM166 277.3c-3.6 1.8-5 5.4-5 13.2 0 8 1.4 11.4 5.4 13.3 3.3 1.7 6.9.9 9.6-2 1.7-1.9 2-3.5 2-11.2-.1-9.4-.7-11.3-4.7-13.4-2.7-1.5-4.2-1.5-7.3.1zM95.9 335.3C93 337.5 92 340.8 92 348c0 7.4 1.6 12.3 4.5 13.4 3.5 1.3 7.6.6 10-1.9 2.3-2.2 2.5-3.2 2.5-11.5s-.2-9.3-2.5-11.5c-2.7-2.7-7.9-3.3-10.6-1.2zM129.5 336.5c-2.3 2.2-2.5 3.2-2.5 11.8 0 8.5.2 9.6 2.3 11.5 3 2.8 8.6 2.9 11.5.2 4.3-4 4.4-19 .2-23.5-3.2-3.4-8.2-3.4-11.5 0zM164.9 335.3c-2.9 2.2-3.9 5.5-3.9 12.7 0 7.4 1.6 12.3 4.5 13.4 3.5 1.3 7.6.6 10-1.9 2.3-2.2 2.5-3.2 2.5-11.5s-.2-9.3-2.5-11.5c-2.7-2.7-7.9-3.3-10.6-1.2zM97 392.3c-3.7 1.9-5 5.4-5 14 0 7.4.2 8 2.9 10.8 3.1 3.1 5.9 3.6 9.4 1.7 4-2.1 4.6-4 4.7-13.4 0-8.1-.2-9.3-2.2-11.2-3-2.7-6.7-3.5-9.8-1.9zM132.1 392.1c-4.3 1.7-5 3.8-5.1 13.6 0 8 .3 9.6 2 11.3 4.2 4.2 11.1 3.2 13.7-2 1.7-3.4 1.6-15.4-.1-18.9-.8-1.5-2.6-3.2-4.1-3.9-3-1.4-3.2-1.4-6.4-.1zM166 392.3c-1.3.7-3 2.4-3.7 3.7-1.6 3.2-1.6 15.8 0 19 2.8 5.5 9.4 6.4 13.7 1.8 1.7-1.9 2-3.5 2-11.3 0-8.2-.2-9.4-2.2-11.3-3-2.7-6.7-3.5-9.8-1.9zM258 300.3c-5.1 2.6-5 .5-5 88 0 86.8 0 86.3 4.5 88.1 3.6 1.3 8.2.6 10.3-1.7l2.2-2.3v-84c-.1-88.7.1-85.7-4.7-88.2-2.7-1.5-4.2-1.5-7.3.1zM293.1 300.1c-5.2 2.1-5-1.6-5.1 88 0 83.1 0 83.6 2.1 86.3 3.9 5 12.8 2.8 14.4-3.6.3-1.3.4-39.3.3-84.5-.3-80.7-.3-82.3-2.3-84.2-2.5-2.5-6.3-3.3-9.4-2zM327 300.3c-5.1 2.6-5 .5-5 88 0 86.8 0 86.3 4.5 88.1 3.6 1.3 8.2.6 10.3-1.7l2.2-2.3v-84c-.1-88.7.1-85.7-4.7-88.2-2.7-1.5-4.2-1.5-7.3.1z" />
		</SVGRender>
	);
};

export default CitySVG;
