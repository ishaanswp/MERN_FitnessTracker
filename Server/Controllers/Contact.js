const Contact=require("../models/Contact");

exports.contactus = async (req, res) => {
    try{
        const { name, email, message } = req.body;
        const newContact = new Contact({
            name,
            email,
            message
        });
  
        await newContact.save();
        res.status(200).json({ message: 'Contact submitted successfully' });
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
  