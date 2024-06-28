import { useState } from "react";
import Header from "../components/Layout/Header";
import ProfileSideBar from "../components/UserProfile/ProfileSideBar";
import ProfileContent from "../components/UserProfile/ProfileContent";
import Footer from "../components/Layout/Footer";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";

const UserProfilePage = () => {
	const [active, setActive] = useState(0);
	return (
		<>
			<Header />
			<div className="w-full">
				<div className="w-3/4 mx-auto mt-2 h-8 bg-gray-200 flex justify-start rounded-sm items-center">
					<Link to="/" className="cursor-pointer">
						<span className="ml-2 text-sm text-gray-500">Home</span>
					</Link>
					<BiSolidRightArrow
						className="ml-2 text-sm text-gray-500"
						size={8}
					/>
					<span className="ml-2 text-sm text-gray-500 capitalize">
						Profile
					</span>
				</div>
				<div className="w-3/4 mx-auto flex bg-[rgb(245,245,245)] py-10 items-center md:items-start">
					<div className="w-[50px] md:w-[300px] sticky">
						<ProfileSideBar active={active} setActive={setActive} />
					</div>
					<div className="w-full ml-20">
						<ProfileContent active={active} />
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default UserProfilePage;
