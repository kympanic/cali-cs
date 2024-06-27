import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import RequestQuote from "../components/Forms/RequestQuote";


const QuotePage = () => {
	return (
		<>
			<Header activeHeading={4} />
				<div className="bg-white p-2 m-6 rounded-lg shadow-lg"></div>
					<RequestQuote />
				<div />
			<Footer />
		</>

	);
};

export default QuotePage;
