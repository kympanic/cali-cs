import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
	return (
		<nav className="bg-blue-700 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="text-white text-xl font-bold">
					California Cleaning Supplies
				</div>
				<ul className="flex">
					<li className="mx-6">
						<a href="/" className="nav-link">
							Home
						</a>
					</li>
					<li className="mx-6">
						<a href="/products" className="nav-link">
							Products
						</a>
					</li>
					<li className="mx-6">
						<a href="/about" className="nav-link">
							About
						</a>
					</li>
					<li className="mx-6">
						<a href="/contact" className="nav-link">
							Contact
						</a>
					</li>
					<li className="mx-2">
						<a href="/quote" className="nav-link">
							<FaCartShopping className="mt-1" />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
