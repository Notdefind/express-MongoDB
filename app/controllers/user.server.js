import url from 'url';

function userServer (db) { 
  const user = db.collection('user');

  this.create = async (req, res) => {
    const params = req.query;
    const { userName, password } = params;
    
    if (!userName || !password) {
      res.send("缺少参数");
      return false;
    }

    const hasUserName = await user.findOne({userName})

    if (hasUserName) {
      res.send("用户名存在");
    } else {
      const data = await user.insert({ userName, password })
      res.send("创建成功");
    }

  };

  this.update = async (req, res) => {
    const params = req.query;
    const { userName, password } = params;
    const hasUserName = await user.findOne({userName})

    if(hasUserName) {
      const updateUser = await user.update({userName},{$set: {password}})
      res.send("更新成功");
    } else {
      res.send("用户名不存在");
    } 
  }

  this.userList = async (req, res) => {
    const userList = await user.find();

    userList.toArray((err, result) => {
      res.send(result);
    });
  };

  this.deleteAll = async(req, res) => {
    const userList = await user.remove();

    res.send("全部删除成功");
  };

  this.deleteOne = async (req, res) => {
    const params = req.query;
    const { userName } = params;
    const hasUserName = await user.findOne({userName})

    if (hasUserName) {
      const userList = await user.remove({userName});

      res.send("单个删除成功");
    } else {
      res.send("用户名不存在");
    }
    
  };

}
  
export default userServer;
  