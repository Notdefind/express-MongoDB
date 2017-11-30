import url from 'url';

function login (db) { 
  const user = db.collection('user');
  
  this.checkedUser = (req, res) => {
    const params = req.body
    const { userNanme, password } = params

    user.insert({userNanme, password }, function (err) {
        if (err) {
          throw err;
        } else {
          res.end(`success`)
        }
    });
  }

  this.userList = (req, res) => {
    user.find({userName: 'wangkang'}).toArray((err, result) => {
      if (err) {
        throw err;
      } else {
        res.send(result)
      }
    })
  }
}
  
  export default login;
  