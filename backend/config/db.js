import mongoose from "mongoose";

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("SUCCESSFULLY CONNECTED TO DB");
	} catch (error) {
		console.log(`ERROR: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
