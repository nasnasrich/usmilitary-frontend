import emailjs from "@emailjs/browser";

const SERVICE_ID = "YOUR_SERVICE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export const sendEmail = (templateId, data) => {
  return emailjs.send(
    SERVICE_ID,
    templateId,
    data,
    PUBLIC_KEY
  );
};