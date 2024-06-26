
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  companyName: String,
  address: String,
  city: String,
  state: String,
  zipCode: String,
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  comments: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
