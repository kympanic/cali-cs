import { footerSupportLinks } from "../../static/data";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-[#000] text-white">
			<div className="grid grid-cols-1 sm:grid-cols-3  gap-6 sm:px-8 px-5 py-5 sm:text-center">
				<ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
					<Link to="/">
						<h1 className="text-4xl font-bold ">
							California Cleaning Supplies
						</h1>
					</Link>
				</ul>
				<ul className="text-center sm:text-start flex flex-col">
					<h1 className="mb-1 font-semibold">About</h1>
					<Link
						to="/"
						className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
					>
						Home
					</Link>
					<Link
						to="/"
						className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
					>
						Github
					</Link>
					<Link
						to="/"
						className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
					>
						FAQ
					</Link>
				</ul>

				<ul className="text-center sm:text-start">
					<h1 className="mb-1 font-semibold">Support</h1>
					{footerSupportLinks.map((link, index) => (
						<li key={index}>
							<Link
								className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
								to="/"
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div
				className="grid grid-cols-1 sm:grid-cols-2  gap-5
         text-center pt-2 text-gray-400 text-sm pb-8"
			>
				<span>
					© 2024 California Cleaning Supplies. All rights reserved.
				</span>
				<span>Terms · Privacy Policy</span>
			</div>
		</div>
	);
};

export default Footer;
