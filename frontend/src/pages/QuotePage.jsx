import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import RequestQuote from "../components/Forms/RequestQuote";


const QuotePage = () => {
	return (
		<>
			<Header activeHeading={4} />
				<div className="bg-white p-2 m-6 rounded-lg shadow-lg"></div>
				<h2 className="text-2xl text-center text-blue-700 font-bold mb-4">Request a Quote</h2>
					<RequestQuote />
				<div />
			<Footer />
		</>

	);
};

export default QuotePage;
