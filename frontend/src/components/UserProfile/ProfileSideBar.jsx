import { RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineMessage, AiOutlineLogin } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbAddressBook } from "react-icons/tb";
import { useLogoutMutation } from "../../redux/api/usersApiSlice.js";
import { logout } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const iconMapping = {
	RxPerson,
	HiOutlineShoppingBag,
	AiOutlineMessage,
	RiLockPasswordLine,
	TbAddressBook,
	AiOutlineLogin,
};

const ProfileSideBar = ({ active, setActive }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [logoutApiCall] = useLogoutMutation();
	const sections = [
		{ icon: "RxPerson", title: "Profile" },
		{ icon: "HiOutlineShoppingBag", title: "Orders" },
		{ icon: "AiOutlineMessage", title: "Inbox" },
		{ icon: "RiLockPasswordLine", title: "Change Password" },
		{ icon: "TbAddressBook", title: "Address" },
		{ icon: "AiOutlineLogin", title: "Log Out" },
	];

	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap();
			dispatch(logout());
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

	const handleClick = (section, index) => {
		if (section.title === "Log Out") {
			logoutHandler();
		}
		setActive(index);
	};

	return (
		<div className="w-[300px] shadow-sm rounded-[10px] mt-3">
			{sections &&
				sections.map((section, index) => {
					const IconComponent = iconMapping[section.icon];
					return (
						<div
							key={section.title}
							className={` ${
								active === index ? "bg-blue-200 font-bold" : ""
							} flex items-center cursor-pointer w-full py-4 px-3 rounded-sm`}
							onClick={() => handleClick(section, index)}
						>
							<IconComponent
								size={20}
								color={active === index ? "" : "grey"}
							/>
							<span
								className={`pl-3 ${
									active === index
										? "text-[#222273]"
										: "text-[#646464]"
								} md:block hidden`}
							>
								{section.title}
							</span>
						</div>
					);
				})}
		</div>
	);
};

export default ProfileSideBar;
