const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const sendEmail = async options => {
  // create a transporter

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // Define the email options

  const mailOptions = {
    from: "Favorite Places <favorite-places@email.com>",
    to: options.email,
    subject: options.subject,
    text: options.message
    // html:
  };

  // Send the email

  await transporter.sendMail(mailOptions);
};

router.post("/");

module.exports = router;
