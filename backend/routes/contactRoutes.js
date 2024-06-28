import express from "express";
import nodemailer from "nodemailer";
import Contact from "../models/contactModel.js";

const router = express.Router();

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

router.post("/contact", async (req, res) => {
	console.log("Received request:", req.body); // Log the received request body
	try {
		const {
			fullName,
			companyName,
			address,
			city,
			state,
			zipCode,
			phoneNumber,
			email,
			comments,
		} = req.body;

		const faxNumber = req.body.faxNumber || "";

		const contact = new Contact({
			fullName,
			companyName,
			address,
			city,
			state,
			zipCode,
			phoneNumber,
			faxNumber,
			email,
			comments,
		});

		await contact.save();

		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: email,
			subject: "Contact Form Submission",
			text: `Thank you for contacting us, ${fullName}! We have received your message and will get back to you soon.\n\nHere are the details you provided:\n
            Full Name: ${fullName}\n
            Company Name: ${companyName}\n
            Address: ${address}\n
            City: ${city}\n
            State: ${state}\n
            Zip Code: ${zipCode}\n
            Phone Number: ${phoneNumber}\n
            Fax Number: ${faxNumber}\n
            Email: ${email}\n
            Comments: ${comments}`,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.error("Error sending email:", error);
				return res
					.status(500)
					.send({ message: "Failed to send email", error });
			}
			console.log("Email sent:", info.response); // Log successful email sending
			res.status(201).send({
				message: "Contact saved and email sent successfully",
			});
		});
	} catch (error) {
		console.error("Error saving contact:", error);
		res.status(400).send({ message: "Failed to save contact", error });
	}
});

export default router;
