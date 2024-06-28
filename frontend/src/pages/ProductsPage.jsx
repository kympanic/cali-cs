import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductGallery from "../components/Products/ProductGallery";

const ProductsPage = () => {
	return (
		<>
			<Header activeHeading={2} />
			<ProductGallery />
			<Footer />
		</>
	);
};

export default ProductsPage;
