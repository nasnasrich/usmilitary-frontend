import emailjs from "@emailjs/browser";

const SERVICE_ID = "80rHNTGmidx91oDIW";
const PUBLIC_KEY = "1GjG2H6ttaSxiJXrQ";

export const sendEmail = (templateId, data) => {
  return emailjs.send(
    SERVICE_ID,
    templateId,
    data,
    PUBLIC_KEY
  );
};