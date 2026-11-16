import emailjs from "@emailjs/browser";

// const SERVICE_ID = "service_uer4pb4";
// const PUBLIC_KEY = "Sa-Kz_j7zOYBAym6l";

const SERVICE_ID = "service_2r2tqcd";
const PUBLIC_KEY = "dxLRF-42POcazTC7r";

export const sendEmail = (templateId, data) => {
  return emailjs.send(SERVICE_ID, templateId, data, PUBLIC_KEY);
};
