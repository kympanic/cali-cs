import mapPlaceholder from "../../assets/map-placeholder.jpg";

const MapComponent = () => {
	return (
		<div className="w-full">
			<img
				src={mapPlaceholder}
				alt="Map Placeholder"
				className="object-contain"
			/>
		</div>
	);
};

export default MapComponent;
