import { useState } from "react";
import Header from "../components/Layout/Header";
import ProfileSideBar from "../components/UserProfile/ProfileSideBar";
import ProfileContent from "../components/UserProfile/ProfileContent";

const UserProfilePage = () => {
	const [active, setActive] = useState(0);
	return (
		<>
			<Header />
			<div className="w-3/4 mx-auto flex bg-[#f5f5f5] py-10 items-center md:items-start">
				<div className="w-[50px] md:w-[200px] sticky">
					<ProfileSideBar active={active} setActive={setActive} />
				</div>
				<ProfileContent active={active} />
			</div>
		</>
	);
};

export default UserProfilePage;
