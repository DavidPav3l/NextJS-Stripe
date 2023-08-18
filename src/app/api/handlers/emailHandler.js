import FormData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(FormData);
const client = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_SECRET_KEY,
});

export async function emailHandler(email) {
  const messageData = {
    to: email,
    from: "David Pavel <no-reply@david.io>",
    subject: "Hello",
    text: "Ia de aici curs, te-n ceapa ma-tii!",
  };
  client.messages
    .create(process.env.MAILGUN_DOMAIN, messageData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}
