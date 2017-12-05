import userServer from '../../controllers/user.server';

function user (app, db) {
  const user = new userServer(db);
  const { create, userList, update, deleteAll, deleteOne } = user;

  app.route("/api/user/create").get(create);
  
  app.route("/api/user/getList").get(userList);

  app.route("/api/user/update").get(update);

  app.route("/api/user/deleteAll").get(deleteAll);

  app.route("/api/user/deleteOne").get(deleteOne);
}

export default user;