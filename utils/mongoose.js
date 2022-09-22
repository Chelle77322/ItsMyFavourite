/* eslint-disable import/
no-anonymous-default-export */

import mongoose, {connect} from 'mongoose';

export default (DB_NAME) => {
    connect(`mongodb://localhost/${DB_NAME}`);
}
console.log(mongoose);