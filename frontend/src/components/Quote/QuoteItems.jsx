import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";
import { LiaSaveSolid } from "react-icons/lia";
import { addToCart, removeFromCart } from "../../redux/features/cart/cartSlice";
import { clearCartItems } from "../../redux/features/cart/cartSlice";

const QuoteItems = () => {
	const dispatch = useDispatch();
	const { cartItems } = useSelector((state) => state.cart);
	const [quantities, setQuantities] = useState(
		cartItems.reduce((acc, item) => {
			acc[item.id] = item.qty;
			return acc;
		}, {})
	);
	const [removeMap, setRemoveMap] = useState({});

	const handleQuantityChange = (item, qty) => {
		setQuantities((prevQuantities) => ({
			...prevQuantities,
			[item.id]: qty,
		}));
		dispatch(addToCart({ ...item, qty: Number(qty) }));
	};

	const handleClearCart = () => {
		dispatch(clearCartItems());
	};

	const handleRemoveItem = (item) => {
		const updatedRemoveMap = { ...removeMap };
		updatedRemoveMap[item.id] = !removeMap[item.id]; // Toggle removal state
		setRemoveMap(updatedRemoveMap);
	};

	const handleUpdateQuote = () => {
		Object.keys(removeMap).forEach((itemId) => {
			if (removeMap[itemId]) {
				const itemToRemove = cartItems.find(
					(item) => item.id === parseInt(itemId)
				);
				if (itemToRemove) {
					dispatch(removeFromCart(itemToRemove));
				}
			}
		});
		setRemoveMap({}); // Clear the removal map after updating quote
	};

	return (
		<div
			className={`${
				cartItems.length === 0 ? "hidden" : ""
			} w-3/4 mx-auto border-t border-t-gray-300 mb-10`}
		>
			<div className="mt-3 flex flex-col w-full">
				<span className="p-2">Items to Quote</span>
				<div className="flex align-middle justify-between bg-blue-300 p-2 mt-5 rounded-t-md">
					<div className="px-5">
						<span className="mr-8">Remove</span>
						<span>Item #</span>
					</div>
					<div className="px-5">
						<span className="mr-8">UOM</span>
						<span>Quantity</span>
					</div>
				</div>

				{cartItems &&
					cartItems.map((item, index) => (
						<div
							key={item.id}
							className={`flex align-middle justify-between ${
								index % 2 === 0 ? "bg-white" : "bg-gray-100"
							} p-2`}
						>
							<div className="px-5 flex">
								<input
									type="checkbox"
									className="mr-20"
									onChange={() => handleRemoveItem(item)}
								/>
								<div className="flex flex-col w-[700px] truncate">
									<span className="text-gray-500">
										{item.id +
											Math.floor(Math.random() * 100000)}
									</span>
									<span className="text-gray-700 truncate">
										{item.title}
									</span>
								</div>
							</div>
							<div className="px-5">
								<span className="mr-12">EA</span>
								<input
									type="number"
									value={quantities[item.id]}
									onChange={(e) =>
										handleQuantityChange(
											item,
											e.target.value
										)
									}
									className="border border-gray-300 rounded px-2 py-1 w-10"
								/>
							</div>
						</div>
					))}
				<div className="flex mt-5 border-t border-gray-100">
					<div className="mt-5">
						<button
							onClick={handleUpdateQuote}
							className="bg-green-400 py-2 px-8 mr-5 rounded-sm text-white uppercase flex items-center"
						>
							<LiaSaveSolid className="mr-2" size={21} />
							Update Quote
						</button>
					</div>
					<div className="mt-5">
						<button
							onClick={handleClearCart}
							className="bg-red-500 py-2 px-8 rounded-sm text-white uppercase flex items-center"
						>
							<FaRegTrashCan className="mr-2" />
							Clear Quote
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuoteItems;
