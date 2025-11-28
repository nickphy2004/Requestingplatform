const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());


mongoose.connect("mongodb://localhost:27017/mern-app")
  .then(() => console.log("MongoDB connected successfully...."))
  .catch((err) => console.log("MongoDB connection failed..", err));

const regsSchema = new mongoose.Schema({
  name: String,
  phonenumber: String,
  email: String,
  webType: String,
  description: String
});

const regsModel = mongoose.model("WebRegDatas", regsSchema);

app.post("/reqst", async (req, res) => {
  try {
    const { name, phonenumber, email, webType, description } = req.body;

  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "webrequesting@gmail.com",
        pass: "glfr pjac fsyj qmjy"
      }
    });

    const mailOption = {
      from: email,
      to: "webrequesting@gmail.com",
      subject: "WEB REQUESTING PLATFORM",
      html: `
        <h2>Name: ${name}</h2>
        <h2>Phone: ${phonenumber}</h2>
        <h2>Email: ${email}</h2>
        <h2>Website Type: ${webType}</h2>
        <h2>Description: ${description}</h2>
      `
    };


    await transporter.sendMail(mailOption);

    const user = new regsModel({
      name,
      phonenumber,
      email,
      webType,
      description
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Email sent and data saved successfully!",
      user
    });

  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({
      success: false,
      message: "Failed to send email or save data",
      error: err.message
    });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
