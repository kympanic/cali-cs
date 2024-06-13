import mapPlaceholder from '../assets/map-placeholder.jpg';

const MapComponent = () => {
	return (
		<div className="map-container">
		<img src={mapPlaceholder} alt="Map Placeholder" className="w-full h-96 object-cover" />
	  </div>
	);
};

export default MapComponent;
