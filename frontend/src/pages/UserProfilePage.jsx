import { useState } from "react";
import Header from "../components/Layout/Header";
import ProfileSideBar from "../components/UserProfile/ProfileSideBar";
import ProfileContent from "../components/UserProfile/ProfileContent";
import Footer from "../components/Layout/Footer";

const UserProfilePage = () => {
	const [active, setActive] = useState(0);
	return (
		<>
			<Header />
			<div className="w-3/4 mx-auto flex bg-[rgb(245,245,245)] py-10 items-center md:items-start">
				<div className="w-[50px] md:w-[300px] sticky">
					<ProfileSideBar active={active} setActive={setActive} />
				</div>
				<div className="w-full ml-20">
					<ProfileContent active={active} />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default UserProfilePage;
