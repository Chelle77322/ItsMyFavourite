import config from "../../config.js";
import mongoose from 'mongoose';
const connectionOptions = { 
    useCreateIndex: true,
    useUnifiedTopology:true,
    useFindAndModify: false
};
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
mongoose.Promise = global.Promise;

export function db() {
    User: require('../controllers/user.model')
}

