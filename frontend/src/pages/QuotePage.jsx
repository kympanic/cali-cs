import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import RequestQuote from "../components/Forms/RequestQuote";
import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import QuoteItems from "../components/Quote/QuoteItems";
import { useSelector } from "react-redux";

const QuotePage = () => {
	const cartItems = useSelector((state) => state.cart);
	console.log(cartItems);
	return (
		<>
			<Header activeHeading={4} />
			<div className="w-full bg-white">
				<div className="w-3/4 mx-auto mt-2 h-8 bg-gray-200 flex justify-start rounded-sm items-center">
					<Link to="/" className="cursor-pointer">
						<span className="ml-2 text-sm text-gray-500">Home</span>
					</Link>
					<BiSolidRightArrow
						className="ml-2 text-sm text-gray-500"
						size={8}
					/>
					<span className="ml-2 text-sm text-gray-500 capitalize">
						Quote
					</span>
				</div>
				<RequestQuote />
				<QuoteItems />
				<Footer />
			</div>
		</>
	);
};

export default QuotePage;
