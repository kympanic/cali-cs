import Header from "../components/Layout/Header";

const HomePage = () => {
	return (
		<>
			<Header activeHeading={1} />
			<div className="w-full h-[1000px] bg-slate-300">
				<h1>CONTENT HERE</h1>
			</div>
		</>
	);
};

export default HomePage;
