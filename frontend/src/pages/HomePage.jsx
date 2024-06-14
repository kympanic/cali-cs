import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Hero from "../components/Layout/Hero";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Categories from "../components/Layout/Categories";

const HomePage = () => {
	const { products } = useContext(ProductContext);
	console.log(products);
	return (
		<>
			<Header activeHeading={1} />
			<Hero />
			<Categories />
			<Footer />
		</>
	);
};

export default HomePage;
