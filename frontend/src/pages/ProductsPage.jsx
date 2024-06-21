import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductGallery from "../components/Products/ProductGallery";

const ProductsPage = () => {
	return (
		<>
			<Header activeHeading={2} />
			<div className="w-full h-[1000px] bg-slate-300">
				<div>
					<ProductGallery/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ProductsPage;
