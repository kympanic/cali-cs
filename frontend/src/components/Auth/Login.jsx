import { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Loader from "../Layout/Loader";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [visible, setVisible] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [login, { isLoading }] = useLoginMutation();

	const { userInfo } = useSelector((state) => state.auth);
	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const redirect = sp.get("redirect") || "/";

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, redirect, userInfo]);

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const res = await login({ email, password }).unwrap();
			console.log(res);
			dispatch(setCredentials({ ...res }));
		} catch (error) {
			toast.error(error?.data?.message || error.message, {
				position: "bottom-center",
			});
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Please Login to Your Account
				</h2>
			</div>
			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6" onSubmit={handleLogin}>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email Address
							</label>
							<div className="mt-1">
								<input
									type="email"
									name="email"
									autoComplete="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="example@gmail.com"
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Password
							</label>
							<div className="mt-1 relative">
								<input
									type={visible ? "text" : "password"}
									name="password"
									autoComplete="current-password"
									required
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
									placeholder="your password"
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
								{visible ? (
									<AiOutlineEye
										className="absolute right-2 top-2 cursor-pointer"
										size={25}
										onClick={() => setVisible(false)}
									/>
								) : (
									<AiOutlineEyeInvisible
										className="absolute right-2 top-2 cursor-pointer"
										size={25}
										onClick={() => setVisible(true)}
									/>
								)}
							</div>
						</div>
						<div className={`${styles.normalFlex} justify-between`}>
							<div className={`${styles.normalFlex}`}>
								<input
									type="checkbox"
									name="remember-me"
									id="remember-me"
									className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-900"
								>
									Remember Me
								</label>
							</div>
							<div className="text-sm">
								<a
									href="forgot-password"
									className="font-medium text-blue-600 hover:text-blue-500"
								>
									Forgot your password?
								</a>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 "
							>
								{isLoading ? "Signing In..." : "Submit"}
							</button>
						</div>
						<div className={`${styles.normalFlex} w-full`}>
							<h4>Need an account?</h4>
							<Link
								to="/signup"
								className="text-blue-600 hover:text-blue-500 pl-2"
							>
								Sign up
							</Link>
						</div>
						{isLoading && <Loader />}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
