const mongoose =require('mongoose');
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
  });
  
  const Contact = mongoose.model('Contact', contactSchema);
  // export default Contact;
  
  module.exports = Contact;