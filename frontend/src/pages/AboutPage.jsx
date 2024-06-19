import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import MapComponent from "../components/Layout/MapComponent";

const AboutPage = () => {
	return (
		<>
			<Header activeHeading={3} />
			<div className="max-w-4xl mx-auto p-8">
				<h1 className="text-4xl text-blue-700 font-bold mb-4">
					About Us
				</h1>
				<p className="text-lg text-gray-700 mb-6">
					Welcome to [Business Name], Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Asperiores dolores accusamus
					totam, in eum cumque sapiente hic? Incidunt molestias, velit
					adipisci laboriosam, natus fugit commodi iste at animi,
					suscipit ab.
				</p>
				<h2 className="text-2xl text-blue-700 font-semibold mb-2">
					Our Mission
				</h2>
				<p className="text-lg text-gray-700 mb-6">
					Our mission is to Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Dignissimos dolore non inventore commodi
					consequatur cum quod itaque est quidem animi. Nobis mollitia
					temporibus quisquam omnis possimus optio asperiores
					laudantium modi!
				</p>
				<h2 className="text-2xl text-blue-700 font-semibold mb-2">
					Contact Us
				</h2>
				<p className="text-lg text-gray-700 mb-2">
					If you have any questions, feel free to reach out to us:
				</p>
				<ul className="list-none text-gray-700 pl-0">
					<li className="text-lg mb-1">
						Email: contact@business.com
					</li>
					<li className="text-lg mb-1">Phone: (123) 456-7890</li>
					<li className="text-lg mb-1">
						Address: 123 Business Street, Business City, BC 12345
					</li>
				</ul>
				<div className="mt-8">
					<h2 className="text-2xl text-blue-700 font-semibold mb-4">
						Our Location
					</h2>
					<MapComponent />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AboutPage;
