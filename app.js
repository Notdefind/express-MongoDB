import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser'
import history from 'connect-history-api-fallback';
import query from './config/db'; //数据库连接句柄
import routes from './routes'

const app = express();

// 设置为全局数据库连接句柄
global.query = query
routes(app);

app.get('env') === 'production'
app.use(history());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))


app.listen(4000, function () {
    console.log('Listening on port 4000...');
});

