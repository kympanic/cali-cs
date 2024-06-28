import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import styles from "../../styles/styles";
import ProductGalleryCard from "./ProductGalleryCard";
import CategoryList from "./CategoryList";

const ProductGallery = () => {
	const { products } = useContext(ProductContext);

	const filteredProducts = products.filter((item) => {
		return item.category === "jewelery" || item.category === "electronics";
	});

	return (
		<div className={`${styles.section} `}>
			<div
				className={`${styles.heading} border-b-4 border-b-blue-700 mb-10 `}
			>
				Products
			</div>
			<div className="container mx-auto p-4">
				<ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
					{filteredProducts.map((product) => {
						return (
							<ProductGalleryCard
								key={product?.id}
								product={product}
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default ProductGallery;
