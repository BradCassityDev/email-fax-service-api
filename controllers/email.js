const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

module.exports = {
    // Send fax as an email
    sendFaxEmail: async (faxNumber, file, subject, message) => {

        console.log('Send Fax Email', {
            faxNumber,
            file,
            subject,
            message,
            faxEmail: process.env.FAX_EMAIL_HOST,
            host: process.env.FAX_EMAIL_HOST,
            port: process.env.FAX_EMAIL_PORT,
        });
        
        let transporter = nodemailer.createTransport({
            host: process.env.FAX_EMAIL_HOST,
            port: process.env.FAX_EMAIL_PORT,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.FAX_EMAIL, 
                pass: process.env.FAX_EMAIL_PASSWORD,
            }, 
        });
        
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: process.env.FAX_EMAIL, 
            to: 'bradley.cassity@gmail.com', 
            subject: subject,
            text: message,
            html: message,
            attachments: [
                {
                    filename: 'test.txt',
                    content: fs.createReadStream(path.join(__dirname, `../uploads/${file.name}`))
                }
            ]
        });
    
        console.log('Email fax result', info);

        return info;
        
    }
}