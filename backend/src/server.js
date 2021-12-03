const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

/*app.listen(5000, () => console.log("Servidor en Ejecución ..."));*/

app.set('port', process.env.PORT || 5000); 
app.listen(app.get('port'), function () { 
    console.log('Servidor de Formulario Escuchando por puerto  '+ app.get('port')); 
});

const contactEmail = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: "edhernandez65@hotmail.com",
    pass: "MAX601214#MSN",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Servidor Listo para Enviar");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "edhernandez65@hotmail.com",
    subject: "Formulario de contacto enviado desde Web Chatas",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Mensaje Enviado" });
    }
  });
});