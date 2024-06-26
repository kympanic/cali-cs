import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const RouteBar = ({ product }) => {
	return (
		<div className="w-full h-8 bg-gray-200 flex justify-start rounded-md items-center">
			<span className="ml-2 text-sm text-gray-500">Home</span>
			<BiSolidRightArrow
				className="ml-2 text-sm text-gray-500"
				size={8}
			/>
			<span className="ml-2 text-sm text-gray-500 capitalize">
				{product?.category}
			</span>
		</div>
	);
};

export default RouteBar;
