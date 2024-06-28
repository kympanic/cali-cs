import React from "react";
import { IoMdSearch } from "react-icons/io";
import { productBrandData } from "../../static/data";

const ProductsFilterSidebar = () => {
	return (
		<div className="w-full h-[90vh] mt-20 shadow-sm rounded-sm flex flex-col justify-between sticky top-20 left-0 z-2">
			<div className="flex flex-col border-gray-300 border-2 shadow-sm py-10 px-3 w-full rounded-sm">
				<span>KEYWORD:</span>
				<input
					type="text"
					className="w-full border-2 border-gray-500 p-2 focus:ring-blue-500 focus:border-blue-500 "
					placeholder="Enter keywords"
				/>
				<span className="mt-4">TYPE:</span>
				<select className="p-2 border-2 border-gray-500 ">
					<option value="product-desc">Product Description</option>
					<option value="product-name">Product Name</option>
					<option value="product-num">Product Number</option>
				</select>
				<span className="mt-4">MANUFACTURER:</span>
				<select className="p-2 border-2 border-gray-500 mb-5 ">
					<option value="">Select One</option>
					<option>Betco</option>
					<option>Dart</option>
					<option>CleanMax</option>
					<option>SternoProducts</option>
				</select>
				<div className="flex w-full justify-center">
					<button className="w-2/3 border bg-green-600 p-3 flex items-center justify-center rounded-md">
						<IoMdSearch size={25} color="white" />
						<span className="ml-1 font-semibold text-white">
							SEARCH
						</span>
					</button>
				</div>
			</div>
			<div className="flex flex-col border-gray-300 border-2 shadow-sm py-5 px-3 w-full rounded-sm">
				<div className="flex flex-col">
					{/* Get the brand list eventually from the actual products */}
					<span className="font-semibold text-gray-700">BRAND</span>
					<div className=" h-[35vh]  flex flex-col  overflow-y-auto">
						{productBrandData &&
							productBrandData.map((brand, index) => (
								<div
									key={index}
									className="flex items-center w-full"
								>
									<input type="checkbox" />
									<span
										className={`${
											index % 2 === 0
												? "bg-white"
												: "bg-blue-100"
										} ml-2 w-full`}
									>
										{brand.name}
									</span>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsFilterSidebar;
