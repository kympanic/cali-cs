import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ContactForm from "../components/Forms/ContactForm";
import MapComponent from "../components/Layout/MapComponent";

const ContactPage = () => {
	return (
		<>
			<Header activeHeading={4} />
			<div className="max-w-4xl mx-auto p-8 bg-slate-300">
			<h1 className="text-4xl text-center text-blue-700 font-bold mb-4">
					Contact Us
				</h1>
				<div className='flex justify-center mb-4'>
				<ul className="list-none text-gray-700 pl-0">
					<li className="text-lg mb-1">
						Email: contact@business.com
					</li>
					<li className="text-lg mb-1">Phone: (123) 456-7890</li>
					<li className="text-lg mb-1">
						Address: 123 Business Street, Business City, BC 12345
					</li>
				</ul>

				</div>
				{/* Use contact form component for jsx. Keeps page code clean */}
				<h2 className="text-2xl text-center text-blue-700 font-bold mb-4">Email Us</h2>
				<ContactForm />
				<div className="mt-8">
					<h2 className="text-2xl text-blue-700 font-semibold mb-4">
						Our Location
					</h2>
				</div>
					<MapComponent />
			</div>
			<Footer />
		</>
	);
};

export default ContactPage;
