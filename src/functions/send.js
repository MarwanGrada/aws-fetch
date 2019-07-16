const AWS = require('aws-sdk')
AWS.config.update({
  region: process.env.SES_REGION
})
const ses = new AWS.SES({ apiVersion: '2010-12-01' })


module.exports = function sendEmail (e) {
  return new Promise((resolve, reject) => {
    // this must relate to a verified SES account
    const from = e.firstName + ' ' + e.lastName + ' <' + process.env.FROM_EMAIL + '>';
    const params = {
      Source: ' <' + process.env.FROM_EMAIL + '>',
      Destination: {
        ToAddresses: [e.email]
      },
      Message: {
        Subject: {
          Data: e.subject,
          Charset: 'UTF-8'
        },
        Body: {
          Text: {
            Data: e.body,
            Charset: 'UTF-8'
          }
        }
      }
    }
  
    
    console.log('e-mail params:', params)

    ses.sendEmail(params, (err, data) => {
      if (err) {
        console.error('Failed to send the email:', err.stack || err)
        reject(err)
      } else {
        console.log('e-mail sent:', data)
        resolve(data)
      }
    })
  
    
  })
}
