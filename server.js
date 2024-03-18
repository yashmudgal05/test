// server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, html } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yashmudgal76@gmail.com', // replace with your Gmail email
      pass: 'yqcidenecscjqouv' // replace with your Gmail password
    }
  });

  const mailOptions = {
    from: 'yashmudgal76@gmail.com', // replace with your Gmail email
    to,
    subject,
    html
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});