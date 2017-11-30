function user (app) {
  app.route('/')
  .get(function (req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
  });
}

export default user
