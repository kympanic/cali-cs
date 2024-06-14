import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
const HomePage = () => {
	return (
		<>
			<Header activeHeading={1} />
			<div className="w-full h-[1000px] bg-slate-300">
				<h1>CONTENT HERE</h1>
			</div>
			<Footer />
		</>
	);
};

export default HomePage;
