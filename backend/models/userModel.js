import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		company: {
			type: String,
		},

		email: {
			type: String,
			required: true,
			unique: true,
		},

		password: {
			type: String,
			required: true,
		},
		phonenumber: {
			type: String,
			required: true,
		},

		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
