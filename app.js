import express from 'express';
import bodyParser from 'body-parser'
import history from 'connect-history-api-fallback';

import routes from './routes'


const mongo = require('mongodb').MongoClient;
const app = express();
const url = 'mongodb://localhost:27017/clementinejs'


app.get('env') === 'production'
app.use(history());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

routes(app);

mongo.connect(url, function (err, db) {
    
    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port 27017.');
    }

    

    app.listen(4000, function () {
        console.log('Listening on port 4000...');
    });

});
