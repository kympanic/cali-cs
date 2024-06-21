import { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
	const [visible, setVisible] = useState(false);

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Register a new account
				</h2>
			</div>
			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700"
							>
								Full Name
							</label>
							<div className="mt-1">
								<input
									type="text"
									name="text"
									autoComplete="name"
									required
									placeholder="John Doe"
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
						</div>
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
									placeholder="example@gmail.com"
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="phone"
								className="block text-sm font-medium text-gray-700"
							>
								Phone Number
							</label>
							<div className="mt-1">
								<input
									type="tel"
									name="phone"
									autoComplete="phone"
									required
									placeholder="2159219999"
									maxLength={10}
									onKeyPress={(event) => {
										if (!/[0-9]/.test(event.key)) {
											event.preventDefault();
										}
									}}
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
						<div>
							<button
								type="submit"
								className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 "
							>
								Submit
							</button>
						</div>
						<div className={`${styles.normalFlex} w-full`}>
							<h4>Already have an account?</h4>
							<Link
								to="/login"
								className="text-blue-600 hover:text-blue-500 pl-2"
							>
								Sign in
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
