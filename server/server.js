const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();


app.use(
  cors({
    origin: "https://subashkumar-s.web.app", 
    methods: ["GET", "POST"],
    credentials: true,
  })
);


app.use(express.json());

const PORT = process.env.PORT || 5000;

// API endpoint to handle message submissions

app.get("/", (req, res) => {
  res.json("hello");
})
app.post("/send-message", (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: "subashkumar22032002@gmail.com",
    subject: `New message from ${name}`,
    replyTo: email,
    html: `
                <p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
