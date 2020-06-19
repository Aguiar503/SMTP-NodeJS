const nodemailer = require('nodemailer');

const configs_email = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "putaquepariuqueraiva@gmail.com", // Email do GMAIL (Configurado para aceitar SMTP redirecionamento)
    pass: "senhamerda" // Senha do Email GMAIL
},
  tls: { rejectUnauthorized: false }
});

const preenchimento_email = {
  from: 'blabla@gmail.com', // Não faz diferença
  to: 'destinário@gmail.com', // Email para o qual vai ser enviado
  subject: `Título do Email`, // Título
  text: `Aqui vai o texto formal do email.`, // Texto (Form Body)
};

configs_email.sendMail(preenchimento_email, function(error, info){
  if (error) {
    console.log("Senha não aceita, configure novamente de maneira correta seu gmail."); // Se der algum erro
  } else {
    console.log("O email foi enviado com sucesso"); // Confirmação de envio
  }
})