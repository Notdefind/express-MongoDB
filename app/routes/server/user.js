import userServer from '../../controllers/user.server';

function user (app, db) {
  const login = new userServer(db);

  app.route('/api/createUser').get(login.checkedUser)
  
  app.route('/api/userList').get(login.userList)
}

export default user;