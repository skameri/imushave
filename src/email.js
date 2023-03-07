import emailjs from 'emailjs-com';
emailjs.init('KogoieXMfLzg-oOTF');

export const sendEmail = (serviceId, templateId, emailData) => {
    return emailjs.send(serviceId, templateId, emailData);
};