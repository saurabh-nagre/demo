const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mp3',{
    useNewUrlParser: true,
    useUndefinedTopology: true
}).then(() => {
    console.log('connected');
}).catch(error => {
    console.log('unable to connect',error);
})
