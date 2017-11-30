import ClickHandler from '../../controllers/clickHandler.server';

function clickHandler (app, db) {
  const clickHandler = new ClickHandler(db);

  app.route('/api/clicks')
  .get(clickHandler.getClicks)
  .post(clickHandler.addClick)
  .delete(clickHandler.resetClicks);
}

export default clickHandler
