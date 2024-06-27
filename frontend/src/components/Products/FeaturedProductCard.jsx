import React from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "react-toastify";

const FeaturedProductCard = ({ product }) => {
	const { id, image, category, title, description } = product;

	const dispatch = useDispatch();

	const addToCartHandler = (product, qty) => {
		dispatch(addToCart({ ...product, qty }));
		toast.success("Item added successfully", {
			position: "bottom-center",
			autoclose: 2000,
		});
	};

	return (
		<div>
			<div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition bg-white">
				<div className="w-full h-full flex justify-center items-center">
					<div className="w-[200px] mx-auto flex justify-center items-center">
						<img
							className="max-h-[160px] group-hover:scale-110 transition duration-300"
							src={image}
							alt=""
						/>
					</div>
				</div>
				<div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all druation-300">
					<button onClick={() => addToCartHandler(product, 1)}>
						<div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
							<BsPlus className="text-3xl" />
						</div>
					</button>
					<Link
						to={`/product/${id}`}
						className="w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-xl "
					>
						<BsEyeFill />
					</Link>
				</div>
			</div>
			<div>
				<div className="text-sm capitalize text-gray-500 mb-1 ">
					{category}
				</div>
				<Link to={`/product/${id}`}>
					<h2 className="font-semibold mb-1 truncate">{title}</h2>
				</Link>
				<div className="text-sm text-gray-500 mb-1 overflow-hidden truncate">
					{description}
				</div>
			</div>
		</div>
	);
};

export default FeaturedProductCard;
