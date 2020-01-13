const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const sendEmail = async options => {
  // create a transporter

  const transporter = nodemailer.createTransport({
    service: "SendGrid",
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
    text: options.text,
    html: options.html
  };

  // Send the email

  await transporter.sendMail(mailOptions);
};

// send email with reset link
router.post("/");

// go to page for changing password
router.get("/:token");

// change password
// send confirmation email that password was changed
router.put("/:token");

module.exports = router;
