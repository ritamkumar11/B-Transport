import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/B-Transport', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    message: String
});

const cityRideSchema= new mongoose.Schema({
    origin: String,
    destination: String,
    contact:String,
    vehicles: String,
    message: String
})

const hireVehicleSchema= new mongoose.Schema({
    from: String,
    to: String,
    contact:String,
    vehicles: String,
    message: String
})

const bookTransportationSchema= new mongoose.Schema({
    from: String,
    to: String,
    contact:String,
    vehicles: String,
    weight: String,
    message: String
})

const Contact = mongoose.model('Contact', contactSchema);
const cityRide= mongoose.model('cityRide',cityRideSchema);
const hireVehicle= mongoose.model('hireVehicle',hireVehicleSchema);
const bookTransportation= mongoose.model('bookTransportation',bookTransportationSchema);

app.post('/api/contact', async (req, res) => {
    try {
        console.log('Recieved Data:',req.body)
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving data' });
    }
});
app.post('/api/cityrides', async (req, res) => {
    try {
        console.log('Recieved Data:',req.body)
        const newRide = new cityRide(req.body);
        await newRide.save();
        res.status(201).json({ message: 'Ride Enquiry registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving ride' });
    }
});

app.post('/api/hirevehicle', async (req, res) => {
    try {
        console.log('Recieved Data:',req.body)
        const newHire = new hireVehicle(req.body);
        await newHire.save();
        res.status(201).json({ message: 'Vehicle Enquiry registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving enquiry' });
    }
});

app.post('/api/booktransportation', async (req, res) => {
    try {
        console.log('Recieved Data:',req.body)
        const newBook = new bookTransportation(req.body);
        await newBook.save();
        res.status(201).json({ message: 'Transportation Vehicle Enquiry registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving enquiry' });
    }
});



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
