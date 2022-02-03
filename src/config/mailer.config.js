import sgMail from "@sendgrid/mail";

export const sendMail = (email, subject, html) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: email, // Change to your recipient
    from: "franciscobarrera968@gmail.com", // Change to your verified sender
    subject: subject,
    text: "and easy to do anywhere, even with Node.js",
    html: html,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getTemplate = (name,token)=>{
    return `
      <h1>Hola Bienvenido ${name}!</h1>
      <p>para confirmar tu correo, ingresa al siguiente link</p>
      <a href=http://localhost:3000/api/verify/${token}>ConfirmarCuenta</a>
    `
  }