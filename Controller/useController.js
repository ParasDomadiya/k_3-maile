const nodemailer = require('nodemailer')



const sender = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "domadiyaparas1@gmail.com",
        pass: "uwqzvfvavvciqttb"
    }
})



const sand = (res, req) => {
    var mailData = {
        from :"domadiyaparas01@gmail.com",
        to:"parasdomadiya00@gmail.com",
        subject: 'Test',
        text: 'First MAIL',
        html: "<h1>Radhe Radhe</h1><p>Lorem ipsum dolor.</p>",
    }

    sender.sendMail(mailData, (err, data) => {
        if (err) {
            return res.json({
                err: "Not able to send email. " + err,
            });
        } else {
            console.log("kishaaan");

            return res.send({
                message: "Email sent successfully.",
                data: data,
            });
        }
    })
}



module.exports={sand}