var nodemailer = requier("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: "email@a.co",
  pass: "pass",
});

var mailOptions = {
  from: "email@a.co",
  to: "email@a.co",
  subject: "Sending Email Using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent : " + info.response);
  }
});
