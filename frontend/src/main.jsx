import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./context/ProductContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<ProductProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ProductProvider>
	</Provider>
);
