import mongoose, { ConnectOptions  } from 'mongoose';
import config from './config/config';

const options: ConnectOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    user: config.DB.USER,
    pass: config.DB.PASSWORD
    
}

mongoose.connect(config.DB.URI, options);


 mongoose.connection
    .once('open', function () {
      console.log('[MongoDB] running');
    })
    .on('error', function (err) {
      console.log('Mongodb connection error:', err);
      
    });