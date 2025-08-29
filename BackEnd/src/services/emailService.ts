import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.API_KEY_SEND_GRID!);
type TEmail = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

export class SandGridEmail {
  public sendMail = async (email: TEmail) => {
    const msg = {
      to: email.to,
      from: "danilo.krausz@gmail.com",
      subject: email.subject,
      text: email.text,
      html: email.html ? email.html : email.text,
    };

    try {
      await sgMail.send(msg);
      console.log("✅ Email enviado com sucesso");
    } catch (error: any) {
      console.log("❌ Erro ao enviar email:", error.response?.body || error.message);
    }
  };
}
