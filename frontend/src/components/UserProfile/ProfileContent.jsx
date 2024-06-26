import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate, useLocation } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import UserProfileOrders from "./UserProfileOrders";
import UserChangePassword from "./UserChangePassword";
import UserAddress from "./UserAddress";

const ProfileContent = ({ active }) => {
	const { id } = useParams();
	const { userInfo } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const redirect = sp.get("redirect") || "/";

	useEffect(() => {
		if (!userInfo || userInfo._id !== id) {
			navigate(redirect);
		}
	}, [navigate, redirect, userInfo]);

	return (
		<div className="w-full bg-white mt-3 rounded-md border border-gray-300">
			{active === 0 && (
				<>
					<div className="flex justify-center flex-col">
						<div className="flex pt-10 pb-5 ml-5 mr-5 border-b-2 ">
							<div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
								<span className="text-white text-center text-3xl">
									{userInfo?.username.charAt(0).toUpperCase()}
								</span>
							</div>
							<div className="ml-5 w-full flex flex-col ">
								<span className=" text-gray-700 capitalize truncate text-2xl mt-2  ">
									Best {userInfo.username}
								</span>
								<div className=" w-full mt-3">
									<span className="text-gray-500">
										Email: {userInfo.email},{" "}
									</span>
									<span className="text-gray-500">
										Phone: {`${userInfo.phone}`}{" "}
									</span>
								</div>
							</div>
						</div>
						<div className="w-full mt-5 flex justify-around">
							<div className="w-2/5 h-[80px] p-3 bg-gray-50 rounded-md text-wrap truncate border">
								<span className=" text-gray-700  ">
									12345 Westminster Way The Good Place CA,
									92553
								</span>
							</div>
							<div className="w-2/5 h-[80px] p-3 bg-gray-50 rounded-md text-wrap truncate border">
								<span className=" text-gray-700 ">
									92532 Hollywood Boulevard Los Angelos CA,
									82321
								</span>
							</div>
						</div>
						<div className="w-full mt-5 ">
							<div className="p-3 ml-11 bg-gray-50 w-[200px] rounded-md border flex items-center cursor-pointer mb-8">
								<BsPlus className="mr-2" size={22} />
								<span className="text-gray-700 font-robo text-sm">
									ADD NEW ADDRESS
								</span>
							</div>
						</div>
					</div>
					<div className="flex pt-5 pb-5 ml-5 mr-5 border-t-2 flex-col">
						<span className="text-xl text-gray-700 font-bold ">
							Recent orders
						</span>
						{/* Order Card Component here */}
						<div className="p-5 bg-red-200 rounded-md mt-5 text-center align-middle">
							<span>You currently have no orders!</span>
						</div>
					</div>
				</>
			)}
			{active === 1 && (
				<div>
					<UserProfileOrders />
				</div>
			)}
			{active === 3 && (
				<div>
					<UserChangePassword />
				</div>
			)}
			{active === 4 && (
				<div>
					<UserAddress />
				</div>
			)}
		</div>
	);
};

export default ProfileContent;
