const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const port = 5001;
const app = express();
const Company =require("./models/invoice")

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ limit: '10mb',extended: false }));
app.use(bodyParser.json({ limit: '10mb' })); // Increase the limit as needed

// Parses the text as json
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


const start = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://esmartmanoj:A8cT4fE1XS9XthLM@simply.joer0t0.mongodb.net/Invoices?retryWrites=true&w=majority&appName=invoice",
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        app.listen(port, () => console.log("Server started on port " + port)); // Corrected port variable
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();

// Removed the second app.listen() call

app.get("/invoices", async (req, res) => {
    const allInvoice = await Company.find() // Assuming Invoice model is defined
    return res.status(200).json(allInvoice);
});

app.post("/invoice",async(req,res)=>{
    const invoice = await Company.create(req.body.company);
    return res.status(200).json(invoice);
})
