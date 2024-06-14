import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	HomePage,
	AboutPage,
	ContactPage,
	ProductDetailsPage,
	ProductsPage,
	QuotePage,
} from "./pages";
import "./index.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/product/:id" element={<ProductDetailsPage />} />
				<Route path="/quote" element={<QuotePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
