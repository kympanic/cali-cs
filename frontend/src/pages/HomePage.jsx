import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Hero from "../components/Layout/Hero";
import Sponsored from "../components/Layout/Sponsored";
import Categories from "../components/Layout/Categories";
import FeaturedProducts from "../components/Products/FeaturedProducts";

const HomePage = () => {
	return (
		<>
			<Header activeHeading={1} />
			<Hero />
			<Categories />
			<FeaturedProducts />
			<Sponsored />
			<Footer />
		</>
	);
};

export default HomePage;
