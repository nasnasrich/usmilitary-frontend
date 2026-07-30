import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_578fq7c";
const PUBLIC_KEY = "80rHNTGmidx91oDIW";

export const sendEmail = (templateId, data) => {
  return emailjs.send(
    SERVICE_ID,
    templateId,
    data,
    PUBLIC_KEY
  );
};