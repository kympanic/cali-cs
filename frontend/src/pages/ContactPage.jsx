import Header from "../components/Layout/Header";
import ContactForm from "../components/Forms/ContactForm";

const ContactPage = () => {
	return (
		<>
			<Header activeHeading={4} />
			<div className="w-full h-[1000px] bg-slate-300">
				{/* Use contact form component for jsx. Keeps page code clean */}
				<ContactForm />
			</div>
		</>
	);
};

export default ContactPage;
