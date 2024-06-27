import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { FiSend } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/styles";
import { useSelector } from "react-redux";
import { FiAlertCircle } from "react-icons/fi";

const RequestQuote = () => {
	const { cartItems } = useSelector((state) => state.cart);

	const [formData, setFormData] = useState({
		contactName: "",
		companyName: "",
		address: "",
		city: "",
		state: "",
		zipCode: "",
		phoneNumber: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const validateForm = () => {
		const requiredFields = [
			"contactName",
			"companyName",
			"phoneNumber",
			"email",
			"address",
			"city",
			"state",
			"zipCode",
			"message",
		];
		for (const field of requiredFields) {
			if (!formData[field]) {
				toast.error(`The ${field} field is required`, {
					position: "bottom-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Bounce,
				});
				return false;
			}
		}
		return true;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) {
			return;
		}
		try {
			const response = await fetch("http://localhost:8000/api/quote", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				toast.success("🦄 Wow so easy!", {
					position: "bottom-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Bounce,
				});
				setFormData({
					contactName: "",
					companyName: "",
					address: "",
					city: "",
					state: "",
					zipCode: "",
					phoneNumber: "",
					email: "",
					message: "",
				});
			} else {
				toast.error("Failed to submit form", {
					position: "bottom-center",
				});
			}
		} catch (error) {
			toast.error("An error occurred while submitting the form", {
				position: "bottom-center",
			});
		}
	};

	return (
		<>
			<div className="w-3/4 mx-auto mb-5 ">
				<h2 className="text-2xl ml-2 mt-3 text-gray-700 font-bold mb-4">
					Request a Quote
				</h2>
				<p
					className={` ${
						cartItems.length === 0 ? "hidden" : ""
					} ml-10 mb-4`}
				>
					Your Information
				</p>
				<form
					onSubmit={handleSubmit}
					className={`${
						cartItems.length === 0 ? "hidden" : ""
					} w-full`}
				>
					{/* Form fields */}
					<div className="mb-4 flex items-center justify-center w-full">
						<label
							htmlFor="contactName"
							className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4  "
						>
							Contact Name:
						</label>
						<input
							type="text"
							id="contactName"
							name="contactName"
							placeholder="Enter your name"
							value={formData.contactName}
							onChange={handleChange}
							className="p-2 block w-3/4 border mr-20 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div className="mb-4 flex items-center justify-center w-full">
						<label
							htmlFor="companyName"
							className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4"
						>
							Company Name:
						</label>
						<input
							type="text"
							id="companyName"
							name="companyName"
							placeholder="Enter your company name"
							value={formData.companyName}
							onChange={handleChange}
							className="p-2 block w-3/4 border mr-20 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div className="mb-4 flex items-center justify-center w-full">
						<label
							htmlFor="phoneNumber"
							className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4"
						>
							Phone Number:
						</label>
						<input
							type="tel"
							id="phoneNumber"
							name="phoneNumber"
							placeholder="Enter your phone number"
							value={formData.phoneNumber}
							onChange={handleChange}
							className="p-2 block w-3/4 border mr-20 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div className="mb-4 flex items-center">
						<label
							htmlFor="email"
							className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4"
						>
							Email:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email"
							value={formData.email}
							onChange={handleChange}
							className="p-2 block w-3/4 border mr-20 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div className="mb-4 flex items-center">
						<label
							htmlFor="address"
							className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4"
						>
							Address:
						</label>
						<input
							type="text"
							id="address"
							name="address"
							placeholder="Enter your address"
							value={formData.address}
							onChange={handleChange}
							className="p-2 block w-3/4 border mr-20 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div className="mb-4 flex items-center">
						<label
							htmlFor="city"
							className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4"
						>
							City:
						</label>
						<input
							type="text"
							id="city"
							name="city"
							placeholder="Enter your city"
							value={formData.city}
							onChange={handleChange}
							className="p-2 block w-3/4 border mr-20 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div className="mb-4 flex items-center">
						<label
							htmlFor="state"
							className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4"
						>
							State:
						</label>
						<input
							type="text"
							id="state"
							name="state"
							placeholder="Enter your state"
							value={formData.state}
							onChange={handleChange}
							className="p-2 block w-3/4 border mr-20 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div className="mb-4 flex items-center">
						<label
							htmlFor="zipCode"
							className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4"
						>
							Zip Code:
						</label>
						<input
							type="text"
							id="zipCode"
							name="zipCode"
							placeholder="Enter your zip code"
							value={formData.zipCode}
							onChange={handleChange}
							className="p-2 block w-3/4 border mr-20 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div className="mb-4 flex items-center">
						<label
							htmlFor="message"
							className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4"
						>
							Message:
						</label>
						<textarea
							id="message"
							name="message"
							placeholder="Enter your message"
							value={formData.message}
							onChange={handleChange}
							className="p-2 block w-3/4 border mr-20 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div className="w-full flex justify-center">
						<button
							type="submit"
							className="mt-4 p-2 pl-5 pr-5 bg-blue-500 text-white rounded-md flex items-center "
						>
							SUBMIT QUOTE <FiSend className="ml-2" />
						</button>
					</div>
				</form>
				{cartItems.length === 0 && (
					<div className="w-full bg-white flex justify-center items-center mt-20">
						<div className="bg-orange-100 flex justify-center items-center p-4 rounded-md w-full">
							<FiAlertCircle
								className="mr-5 text-red-500 "
								size={100}
							/>
							<span className="text-2xl">
								You currently have no selected items to quote.
							</span>
						</div>
					</div>
				)}
			</div>

			<ToastContainer />
		</>
	);
};

export default RequestQuote;
