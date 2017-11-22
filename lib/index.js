import express from 'express';

import routes from '../app/routes';

const mongo = require('mongodb').MongoClient;
const app = express();
const url = 'mongodb://localhost:27017/clementinejs'

app.get('env') === 'production'
app.use('/public', express.static('public'));
app.use('/controllers', express.static('/app/controllers'));

mongo.connect(url, function (err, db) {
    
    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port 27017.');
    }

    app.use('/public', express.static(process.cwd() + '/public'));
    app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

    routes(app, db);

    app.listen(4000, function () {
        console.log('Listening on port 4000...');
    });

});
