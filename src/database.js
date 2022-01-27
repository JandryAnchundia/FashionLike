import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/idea1')
    .then(db => console.log('db is connected'))
    .catch(err => console.log(err))
