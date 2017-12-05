import url from 'url';
import api from '../../services/api'
import { isVaildUserName, isVaildPassword } from "../../utils";

function userServer (db) { 
  const user = db.collection('user');

  this.create = async (req, res) => {
    const params = req.query;
    const userName = params.userName.trim();
    const password = params.password.trim();

    if (!userName || !password) {
      const data = api.err("缺少参数");

      res.json(data);
      return false;
    }

    if (isVaildUserName(userName)) {
      const data = api.err("用户名格式不正确");

      res.json(data);

      return false;
    }

    if (isVaildPassword(password)) {
      const data = api.err("密码格式不正确");

      res.json(data);
      return false;
    }

    const hasUserName = await user.findOne({userName})

    if (hasUserName) {
      const data = api.err("用户名存在");

      res.json(data);
    } else {
      const createUser = await user.insert({ userName, password })
      const data = api.success("创建成功");

      res.json(data);
    }

  };

  this.update = async (req, res) => {
    const params = req.query;
    const { userName, password } = params;
    const hasUserName = await user.findOne({userName})

    if (isVaildUserName(userName)) {
      const data = api.err("用户名格式不正确");

      res.json(data);

      return false;
    }

    if(hasUserName) {
      const updateUser = await user.update({userName},{$set: {password}})
      const data = api.success("更新成功");

      res.json(data);
    } else {
      userNotFind(res);
    } 
  }

  this.userList = async (req, res) => {
    const userList = await user.find();

    userList.toArray((err, result) => {
      const data = api.success("成功", result);

      res.json(data);
    });
  };

  this.deleteAll = async(req, res) => {
    const userList = await user.remove();
    const data = api.success("全部删除成功");
    
    res.json(data);
  };

  this.deleteOne = async (req, res) => {
    const params = req.query;
    const { userName } = params;
    const hasUserName = await user.findOne({userName})

    if (isVaildUserName(userName)) {
      const data = api.err("用户名格式不正确");

      res.json(data);

      return false;
    }

    if (hasUserName) {
      const userList = await user.remove({userName});
      const data = api.success("单个删除成功");

      res.json(data);
    } else {
      userNotFind(res);
    }
    
  };

}

function userNotFind(res) {
  const data = api.err("用户名不存在");

  res.json(data);
}

function vaildUserName(userName, res) {
  if (isVaildUserName(userName)) {
    const data = api.err("用户名格式不正确");

    res.json(data);

    return false
  }
}

export default userServer;
  