import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Hero from "../components/Layout/Hero";

import Categories from "../components/Layout/Categories";
import FeaturedProducts from "../components/Products/FeaturedProducts";

const HomePage = () => {
	return (
		<>
			<Header activeHeading={1} />
			<Hero />
			<Categories />
			<FeaturedProducts />
			<Footer />
		</>
	);
};

export default HomePage;
