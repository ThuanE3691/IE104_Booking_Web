import RoomCard from "@/Components/Layout/RoomCard";

const RoomAvailable = ({ rooms }) => {
	console.log(rooms);
	return (
		<div className="my-8">
			<h2 className="text-lg font-semibold">Các phòng trống</h2>
			<ul className="mt-4 grid grid-cols-[repeat(3,400px)] gap-y-8 gap-x-7">
				{rooms.block.map((block) => {
					const room = rooms.rooms[block.room_id];
					return <RoomCard room={room} block={block}></RoomCard>;
				})}
			</ul>
		</div>
	);
};

export default RoomAvailable;
