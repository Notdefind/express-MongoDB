import ClickHandler from '../controllers/clickHandler.server';

const routes = (app, db) => {
    const clickHandler = new ClickHandler(db);
    app.route('/')
    .get(function (req, res) {
        res.sendFile(process.cwd() + '/public/index.html');
    });

    app.route('/api/clicks')
    .get(clickHandler.getClicks)
    .post(clickHandler.addClick)
    .delete(clickHandler.resetClicks);
};

export default routes;