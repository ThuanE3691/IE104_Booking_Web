import SVGRender from "@/Components/Feature/Layout/SVGRender";

const ReceptionistSVG = ({ className }) => {
	return (
		<SVGRender version="1.0" viewBox="0 0 512 512" className={className}>
			<path d="M180.2 1.1c-14.3 2.5-30.7 10.2-40.4 18.9-4.1 3.7-5.1 5.2-5.1 7.8 0 4.2 2.8 7.2 6.8 7.2 2.2 0 4.9-1.3 9.1-4.6 39.8-31.2 97.1-12.1 111.1 37.1 1.5 5.2 1.7 12.9 2.1 60.2l.3 54.3H228v-5.3c0-5.2.2-5.4 6.5-12 4.6-4.6 7.7-9 10.1-14.2 3.5-7.3 3.6-7.8 5.5-31.2 2.5-31.8 2.5-35.2-.4-39.4-1.3-1.9-4.6-4.6-7.7-6.2-6.8-3.5-13.4-9.8-16.1-15.4-1.3-2.6-2.4-7.7-2.9-13-.8-9.4-2.6-12.3-7.5-12.3-4.5 0-7.2 3.4-7.8 9.9-.8 7.4-3 13.2-7.4 19.3-4.5 6.2-11 10.4-20.8 13.2-4.4 1.3-11.2 3.4-15.2 4.5-12.3 3.6-21.4 12.7-25 25-1.2 4.3-1.4 7.9-.8 17.5 1.3 23 4.5 31.6 16.2 43.3 6 6.1 6.3 6.5 6.3 11.3v5h-36.1l.3-55.8c.3-55.3.3-55.8 2.6-62.6 2.6-7.7 2.2-10.2-2.1-13.1-3.4-2.2-7.4-1-9.8 2.8-1 1.7-2.7 7-3.9 11.8-1.9 8.1-2 11.8-2 63.2v54.6l-5.5 2.5c-10.4 4.7-17 11.8-20.5 22.2-1.8 5.3-2 8.6-2 41.5v35.8l-38 .3-38 .3-2.7 2.8L.5 291l-.3 32.6-.3 32.6 4.1 3.9 4 3.8v70.6c0 46.5.4 71.3 1 72.6 2.8 5.2-12.4 4.9 247 4.9s244.2.3 247-4.9c.6-1.3 1-26.1 1-72.6v-70.6l4-3.8 4.1-3.9-.3-32.6-.3-32.6-2.8-2.7-2.7-2.8-38-.3-38-.3v-14.3c0-17.8-1.8-24.5-8.8-33.8-6.8-9-15-14-27.9-17.4-.8-.2-1.3-2.2-1.3-5.4 0-4.9.1-5 3-5 6.8 0 10.4-8.4 5.7-12.8-2.2-2.1-3.3-2.2-16.8-2.2-13.9 0-14.6.1-16.7 2.3-4.7 5-.9 12.7 6.3 12.7h3.5v5c0 4.6-.2 5-2.7 5.6-11.8 2.6-20.5 8.1-27.5 17.2-7 9.3-8.8 16-8.8 33.8V285h-29.9l-.3-36.8c-.3-36.1-.3-36.8-2.7-42.7-3.2-8-12.4-17.2-20.3-20.5l-5.7-2.3-.4-55.1c-.3-52.8-.4-55.4-2.5-63.5-8-30.3-31-53.4-61.8-61.6-7.1-1.9-26.9-2.8-34.2-1.4zm42.1 77.2c2.1 2.1 6.3 5.2 9.3 6.8 4.2 2.4 5.4 3.6 5.4 5.5 0 7.5-3.2 45.5-4.1 48.9-4.5 16.5-28.5 32.8-43.5 29.5-12.3-2.8-27.4-14.4-32.1-24.8-2-4.1-2.7-8.2-3.5-17.5-1.2-14.9-.6-19.3 3.2-24.6 3.7-5 7.7-7 21-10.5 14.9-3.9 22.2-7.8 30-15.7l6.5-6.7 1.9 2.7c1.1 1.4 3.7 4.3 5.9 6.4zm-27.8 105.9c3.9 0 8.9-.7 11.4-1.6 6.5-2.4 7.1-2.2 7.1 2.4 0 5.1 2.4 8.9 6.7 10.7 2.8 1.1 3.2 1.6 2.3 3.2-1.4 2.8-8.1 7.8-13.7 10.4-7.4 3.4-19.8 3.1-27.9-.6-3.4-1.6-8-4.8-10.3-7.1l-4.2-4.3 3.6-2.2c3.8-2.2 6.5-7.1 6.5-11.9v-2.9l5.8 2c3.6 1.2 8.3 2 12.7 1.9zm-71.1 19.3c7.7 21.2 25 38 47.3 45.8 7.4 2.6 10.7 3.1 20.8 3.5 14.1.5 23.4-1.2 33.3-5.8 9.5-4.4 11.4-8 7.1-13.5-2.7-3.3-5.9-3.1-16.4 1-5.5 2.2-9.3 2.9-17.4 3.3-12.6.6-18.8-.6-30-6-10.8-5.2-21.9-15.9-27.4-26.4-2-4-3.7-7.5-3.7-7.8 0-.3 2.7-.6 5.9-.6h5.9l3 5.3c3.5 6.3 12.8 15.1 19.8 18.9 14.1 7.6 30.9 7.7 46.2.2 6.8-3.3 18-14.2 20.6-20.2l1.9-4.2h6.3c7.3 0 7.3-.5 1.3 10.9-3.1 5.9-3.2 6.5-1.8 8.9 2.2 4 6.2 5.6 9.7 4 3-1.5 8.2-10.2 10.9-18.6 1.4-4.4 2-5.2 4.1-5.2 7.5 0 15.7 5.2 19.5 12.3 2.1 4.1 2.2 5.2 2.5 39.9l.3 35.8H271v-21.4c0-20.1-.1-21.5-2.1-24-2.7-3.4-7.1-3.5-10.4-.1-2.3 2.2-2.5 3.2-2.5 11v8.5h-44.2l-2.9 2.9c-2.8 2.9-2.9 3.2-2.9 13V285h-71.9l-.3-22.1c-.3-21.8-.3-22.1-2.7-24-3-2.5-7.6-2.4-10.1.1-1.9 1.9-2 3.3-2 24v22H97v-35c0-29.4.3-35.7 1.6-38.8 3.2-7.8 12.4-14.5 19.3-14 3.1.3 3.5.7 5.5 6.3zm275.3 33.3c7.8 4.1 14 12 15.8 19.9l.7 3.3h-62.4l.7-3.3c2.1-9.5 9.5-17.7 19.2-21.3 5.8-2.2 20.6-1.4 26 1.4zM256 279.5v5.5h-35v-11h35v5.5zm159 .5v5h-62v-10h62v5zm82 44v24h-19c-18.9 0-19.1 0-21.5 2.5-3.2 3.1-3.2 6.9 0 10 2.3 2.4 2.8 2.5 17.5 2.5h15v134H23V363h406.1l2.4-2.5c3.2-3.1 3.2-6.9 0-10l-2.4-2.5H15v-48h482v24z" />
		</SVGRender>
	);
};

export default ReceptionistSVG;