import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ContactForm from "../components/Forms/ContactForm";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";
import MapComponent from "../components/Layout/MapComponent";

const ContactPage = () => {
	return (
		<>
			<Header activeHeading={4} />
			<div className="w-full bg-white flex flex-col min-h-screen">
				<div className="w-3/4 mx-auto mt-2 h-8 bg-gray-200 flex justify-start rounded-sm items-center">
					<Link to="/" className="cursor-pointer">
						<span className="ml-2 text-sm text-gray-500">Home</span>
					</Link>
					<BiSolidRightArrow
						className="ml-2 text-sm text-gray-500"
						size={8}
					/>
					<span className="ml-2 text-sm text-gray-500 capitalize">
						Contact Us
					</span>
				</div>
				<div className="flex flex-grow w-full max-w-7xl mx-auto">
					<div className="w-2/3  ">
						<div className="flex flex-col gap-2 mt-5">
							<span className="ml-2 text-3xl">Contact Us</span>
							<span className="ml-5 text-red-700">
								* Field Required
							</span>
						</div>
						<ContactForm />
					</div>
					<div className="w-1/3 p-5 ">
						<div className="bg-white p-6 rounded-lg shadow-lg mt-5">
							<span className="text-gray-600 text-sm">
								Please contact us today and we will be glad to
								assist you with your janitorial, paper and
								packaging needs
							</span>
							<div className="mt-10">
								<MapComponent />
							</div>

							<h1 className="text-2xl text-center text-blue-700 font-bold mb-4">
								Our Info
							</h1>
							<ul className="list-none text-gray-700 pl-0 mb-4">
								<li className="text-lg font-bold">
									California Cleaning Supplies
								</li>
								<li className="text-md">123 Business Street</li>
								<li className="text-md mb-3">
									Business City, BC 12345
								</li>
								<li className="text-md  text-gray-500">
									(951)-436-7890
								</li>
								<li className="text-md mb-1 text-gray-500">
									sales@cscleaningsupplies.com
								</li>
							</ul>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default ContactPage;
