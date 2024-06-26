import React from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const ProductGalleryCard = ({ product, index }) => {
	const dispatch = useDispatch();
	const { id, image, category, title, description, price } = product;

	const addToCartHandler = (product, qty) => {
		dispatch(addToCart({ ...product, qty }));
		toast.success("Item added successfully", {
			position: "bottom-center",
			autoclose: 2000,
		});
	};
	return (
		<div
			className={`${
				index % 2 === 0 ? "bg-white" : "bg-gray-100"
			} border border-[#e4e4e4] h-[250px] relative overflow-hidden group transition `}
		>
			<div className="w-full h-full flex justify-center space-around items-center">
				<div className="w-full flex space-around items-center pr-5 ">
					<div className="w-[200px] ml-10 flex justify-center ">
						<img
							className="max-h-[80px] m-[100px] group-hover:scale-110 transition duration-300"
							src={image}
							alt=""
						/>
					</div>
					<div className="ml-[25px]">
						<div className="text-sm capitalize text-gray-500 mb-1 flex">
							{category}
						</div>
						<Link to={`/product/${id}`}>
							<h2 className="font-semibold mb-1 truncate">
								{title}
							</h2>
						</Link>
						<div>${price}</div>
						<div className="text-sm text-gray-500 mb-1 overflow-hidden truncate text-wrap">
							{description}
						</div>
						<div>
							<b>PLACEHOLDER FOR SKU</b>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all druation-300">
				<button>
					<div
						onClick={() => addToCartHandler(product, 1)}
						className="flex justify-center items-center text-white w-12 h-12 bg-red-500"
					>
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
	);
};

export default ProductGalleryCard;
