const Searchbar = () => {
	return (
		<div className="flex items-center justify-center mt-4 ">
			<input
				type="text"
				placeholder="Search for products..."
				className="px-4 py-2 sm:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
			/>
			<button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
				Look up
			</button>
		</div>
	);
};

export default Searchbar;
