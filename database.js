const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/mainData';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
  module.exports = mongoose;
  

