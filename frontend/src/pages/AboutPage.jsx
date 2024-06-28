import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import MapComponent from "../components/Layout/MapComponent";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";

const AboutPage = () => {
	return (
		<>
			<Header activeHeading={3} />
			<div className="w-full flex flex-col min-h-screen bg-[#f6f6f5]">
				<div className="w-3/4 mx-auto mt-2 h-8 bg-gray-200 flex justify-start rounded-t-sm items-center">
					<Link to="/" className="cursor-pointer">
						<span className="ml-2 text-sm text-gray-500">Home</span>
					</Link>
					<BiSolidRightArrow
						className="ml-2 text-sm text-gray-500"
						size={8}
					/>
					<span className="ml-2 text-sm text-gray-500 capitalize">
						About Us
					</span>
				</div>
				<div className="w-3/4 mx-auto p-8 border shadow-sm ">
					<div className="relative">
						<h1 className="relative text-4xl text-blue-700 font-bold mb-4 z-10">
							About Us
						</h1>
						<div className="w-[150px] absolute inset-0 -skew-y-6 bg-red-400 mt-1 z-0"></div>
					</div>

					<p className="text-lg text-gray-700 mb-6">
						Welcome to [Business Name], Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Asperiores dolores
						accusamus totam, in eum cumque sapiente hic? Incidunt
						molestias, velit adipisci laboriosam, natus fugit
						commodi iste at animi, suscipit ab.
					</p>
					<h2 className="text-2xl text-blue-700 font-semibold mb-2">
						Our Mission
					</h2>
					<p className="text-lg text-gray-700 mb-6">
						Our mission is to Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Dignissimos dolore non inventore
						commodi consequatur cum quod itaque est quidem animi.
						Nobis mollitia temporibus quisquam omnis possimus optio
						asperiores laudantium modi!
					</p>
					<div className="flex ">
						<div className="w-3/4">
							<h2 className="text-2xl text-blue-700 font-semibold mb-2">
								Contact Us
							</h2>
							<p className="text-lg text-gray-700 mb-2">
								If you have any questions, feel free to reach
								out to us:
							</p>
							<ul className="list-none text-gray-700 pl-0">
								<li className="text-lg mb-1">
									<span className="font-bold">Email: </span>{" "}
									contact@business.com
								</li>
								<li className="text-lg mb-1">
									<span className="font-bold">Number: </span>{" "}
									(123) 456-7890
								</li>
								<li className="text-lg mb-1">
									<span className="font-bold">Address: </span>{" "}
									123 Business Street, Business City, BC 12345
								</li>
							</ul>
						</div>

						<div className="w-full border-2 border-red-200 shadow-md p-3 rounded-md">
							<h2 className="text-2xl text-blue-700 font-semibold mb-2">
								Our Location
							</h2>
							<div className="w-full h-[500px]= ">
								<MapComponent />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AboutPage;
