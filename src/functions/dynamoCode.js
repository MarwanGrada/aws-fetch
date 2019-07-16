const sendEmail = require('./send');
const addToDb = require('./dynamoCode');


console.log('starting function')

exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)
  console.log(e.subject);
  console.log(ctx);
  
  addToDb(e)
   
  if (e.subject && e.body) {
    sendEmail(e).then((result) => {
      cb(null, result)
    }, cb)
  } else {
    cb(new Error('Invalid payload: ' + JSON.stringify(e)))
  };
  
  
  
}
