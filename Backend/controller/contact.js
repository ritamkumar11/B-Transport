export const addContact = async (req, res) => {
  try {
    console.log("Recieved Data:", req.body);
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
};
