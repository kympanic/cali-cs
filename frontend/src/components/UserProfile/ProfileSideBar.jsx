import { RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag, HiOutlineReceiptRefund } from "react-icons/hi";
import { AiOutlineMessage, AiOutlineLogin } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineTrackChanges } from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";

const iconMapping = {
	RxPerson,
	HiOutlineShoppingBag,
	AiOutlineMessage,
	RiLockPasswordLine,
	TbAddressBook,
	AiOutlineLogin,
};

const ProfileSideBar = ({ active, setActive }) => {
	const sections = [
		{ icon: "RxPerson", title: "Profile" },
		{ icon: "HiOutlineShoppingBag", title: "Orders" },
		{ icon: "AiOutlineMessage", title: "Inbox" },
		{ icon: "RiLockPasswordLine", title: "Change Password" },
		{ icon: "TbAddressBook", title: "Address" },
		{ icon: "AiOutlineLogin", title: "Log Out" },
	];

	const handleClick = (section, index) => {
		setActive(index);
	};

	return (
		<div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
			{sections &&
				sections.map((section, index) => {
					const IconComponent = iconMapping[section.icon];
					return (
						<div
							key={section.title}
							className="flex items-center cursor-pointer w-full mb-8"
							onClick={() => handleClick(section, index)}
						>
							<IconComponent
								size={20}
								color={active === index ? "red" : ""}
							/>
							<span
								className={`pl-3 ${
									active === index ? "text-[red]" : ""
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
