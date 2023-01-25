const mongoose = require('mongoose')

//Connect to mongodb
mongoose.connect('mongodb://localhost/citiesclear');

mongoose.connection.once('open',function() {
    console.log('connection made, now make fire');
}).on('error', function(error) {
    console.log('error', error);
});


