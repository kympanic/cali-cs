import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import { ToastContainer } from "react-toastify";
import {
	HomePage,
	AboutPage,
	ContactPage,
	ProductDetailsPage,
	ProductsPage,
	QuotePage,
	LoginPage,
	SignupPage,
	AdminPage,
	UserProfilePage,
	NotFoundPage,
} from "./pages";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<ToastContainer />
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/product/:id" element={<ProductDetailsPage />} />
				<Route path="/quote" element={<QuotePage />} />
				<Route path="/user/:id" element={<UserProfilePage />} />
				<Route path="/admin/:id" element={<AdminPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
