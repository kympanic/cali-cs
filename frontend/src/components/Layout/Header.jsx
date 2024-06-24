import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { categoriesData } from "../../static/data.js";
import { useState } from "react";
import Navbar from "./Navbar.jsx";
import DropDown from "./DropDown.jsx";
import { logo } from "../../assets/index.js";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice.js";
import { logout } from "../../redux/features/auth/authSlice";

const Header = ({ activeHeading }) => {
	const { userInfo } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate;
	const [active, setActive] = useState(false);
	const [dropDown, setDropDown] = useState(false);

	const [logoutApiCall] = useLogoutMutation();

	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap();
			dispatch(logout());
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

	window.addEventListener("scroll", () => {
		if (window.scrollY > 70) {
			setActive(true);
		} else {
			setActive(false);
		}
	});

	return (
		<>
			<div className={`${styles.section}`}>
				<div className="flex items-center justify-between ">
					<div>
						<Link to="/">
							<img src={logo} alt="" />
							{/* <h1 className="text-2xl p-4 text-center font-bold ">
								California Cleaning Supplies
							</h1> */}
						</Link>
					</div>
					{/* Searchbar */}
					<div className="w-[50%] relative">
						<input
							type="text"
							placeholder="Search for products.."
							className="h-[40px] w-full p-2 border-[black] border-[2px] rounded-md"
						/>
						<AiOutlineSearch
							size={30}
							className="absolute right-2 top-1.5 cursor-pointer border-l-black"
						/>
					</div>
					{userInfo ? (
						<div
							className={`${styles.button}`}
							onClick={logoutHandler}
						>
							<h1 className="text-[#fff] flex items-center">
								Logout
								<IoIosArrowForward className="ml-1" />
							</h1>
						</div>
					) : (
						<Link to="/login">
							<div className={`${styles.button}`}>
								<h1 className="text-[#fff] flex items-center">
									Login
									<IoIosArrowForward className="ml-1" />
								</h1>
							</div>
						</Link>
					)}
				</div>
			</div>
			<div
				className={`${
					active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
				} transition 800px:flex items-center justify-between w-full bg-blue-700 h-[70px]`}
			>
				<div
					className={`${styles.section} relative ${styles.normalFlex} justify-between`}
				>
					{/* Category */}
					<div
						onClick={() => setDropDown(!dropDown)}
						className="relative h-[60px] mt-[10px] w-[200px] 1000px:block"
					>
						<BiMenuAltLeft
							size={30}
							className="absolute top-3 left-2"
						/>
						<button
							className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
						>
							Categories
						</button>
						<IoIosArrowDown
							size={20}
							className="absolute right-2 top-4 cursor-pointer"
							onClick={() => setDropDown(!dropDown)}
						/>
						{dropDown ? (
							<DropDown
								categoriesData={categoriesData}
								setDropDown={setDropDown}
								dropDown={dropDown}
							/>
						) : null}
					</div>
					{/* NavItems */}
					<div className={`${styles.normalFlex}`}>
						<Navbar active={activeHeading} />
					</div>
					{/* Cart and User Profile */}
					<div className="flex ml-5">
						<div className={`${styles.normalFlex}`}>
							<div className="relative cursor-pointer mr-[15px]">
								<Link to="/quote">
									<AiOutlineShoppingCart
										size={30}
										color="rgb(255 255 255/ 83%)"
									/>
								</Link>
							</div>
							<div className="relative cursor-pointer mr-[15px]">
								{userInfo ? (
									<Link to={`/user/${userInfo._id}`}>
										<span className="text-white ml-5 border p-2 rounded-lg bg-red-600">
											{userInfo.username
												.charAt(0)
												.toUpperCase()}
										</span>
									</Link>
								) : (
									<Link to="/login">
										<CgProfile
											className="ml-5"
											size={30}
											color="rgb(255 255 255/ 83%)"
										/>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
