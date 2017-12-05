import userPage from './page/user'

import userServer from './server/user'

const routes = (app, db) => {
    
    // page
    userPage(app)
    // server
    userServer(app, db)
    
    // 404
    app.get("*", function(req, res) {
      res.end("No Found");
    });
};

export default routes;