import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import styles from "../../styles/styles";
import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProducts = () => {
	const { products } = useContext(ProductContext);

	const filteredProducts = products.filter((item) => {
		return item.category === "jewelery" || item.category === "electronics";
	});

	return (
		<div className={`${styles.section} `}>
			<div
				className={`${styles.heading} border-b-4 border-b-blue-700 mb-10 `}
			>
				Featured Products
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
				{filteredProducts.map((product) => {
					return (
						<FeaturedProductCard
							product={product}
							key={product.id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default FeaturedProducts;
