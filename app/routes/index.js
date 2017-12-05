import userPage from './page/user'

import userServer from './server/user'

const routes = (app, db) => {
    
    // page
    userPage(app)
    // server
    userServer(app, db)
    
};

export default routes;