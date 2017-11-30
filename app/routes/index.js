import userPage from './page/user'

import userServer from './server/user'
import clickHandler from './server/clickHandler'

const routes = (app, db) => {
    
    // page
    userPage(app)
    // server
    clickHandler(app, db)

    userServer(app, db)
    
};

export default routes;