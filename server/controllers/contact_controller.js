const nodeMailer = require('nodemailer')

module.exports = {

    createEmail: ( req, res, next ) => {
        const dbInstance = req.app.get('db')
        let { name, email, phone, message } = req.body

        dbInstance.create_email([ name, email, phone, message ])
            .then( response => res.status( 200 ).send( response ))
    },

    sendEmail: ( req, res, next ) => {
        let transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'millstreetent@gmail.com',
                pass: 'Charleylikesranch'
            }
        })

        let mailOptions = {
            from: ' MillStreet <caleb-gray@hotmail.com> ',
            to: 'calebgray4570@gmail.com',
            subject: 'website submission',
            text: `Test with the following feilds... 
                Name: ${req.body.name}
                email: ${req.body.email}
                phone: ${ req.body.phone}
                message: ${req.body.message}`
        }

        transporter.sendMail( mailOptions, ( error, info ) => {
            if (error){
                console.log(error)
            } else {
                console.log( 'message sent');
            }
        })
    }

    
}