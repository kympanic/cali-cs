import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	HomePage,
	AboutPage,
	ContactPage,
	ProductDetailsPage,
	ProductsPage,
	QuotePage,
} from "./pages";
import { Footer, Navbar } from "./components";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route
					path="/productdetails"
					element={<ProductDetailsPage />}
				/>
				<Route path="/quote" element={<QuotePage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
