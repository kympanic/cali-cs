import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: { cartItems: [] };

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const { ...item } = action.payload;
			console.log(item, "hello");
			const existItem = state.cartItems.find((x) => x.id === item.id);

			if (existItem) {
				state.cartItems = state.cartItems.map((x) =>
					x.id === existItem.id ? item : x
				);
			} else {
				state.cartItems = [...state.cartItems, item];
			}
			localStorage.setItem("cart", JSON.stringify(state));
		},
	},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
