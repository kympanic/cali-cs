import mongoose from "mongoose";

const productSchema = mongoose.Schema(
	{
		product_id: {
			type: String,
			required: true,
      unique: true
		},

		name: {
			type: String,
			required: true,
			unique: true,
		},

		description: {
			type: String,
			required: true,
		},

		price: {
			type: Number,
			required: true,
			default: 0.00,
		},
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
