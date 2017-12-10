import url from 'url';
import restful from '../services/restful'
import { isVaildUserName, isVaildPassword } from "../utils";


class userServer {
  constructor () {
    this.create = () => this.create.bind(this)
    this.userList = () => this.userList.bind(this)
    this.update = () => this.update.bind(this)
    this.deleteAll = () => this.deleteAll.bind(this)
    this.deleteOne = () => this.deleteOne.bind(this)
  }

  async create(req, res) {
    console.log('xxx')
    res.send('xxx')
    return false;
    const params = req.query;
    const userName = params.userName.trim();
    const password = params.password.trim();

    if (!userName || !password) {
      const data = restful.err("缺少参数");

      res.json(data);
      return false;
    }

    if (isVaildUserName(userName)) {
      const data = restful.err("用户名格式不正确");

      res.json(data);

      return false;
    }

    if (isVaildPassword(password)) {
      const data = restful.err("密码格式不正确");

      res.json(data);
      return false;
    }

    const hasUserName = await user.findOne({ userName })

    if (hasUserName) {
      const data = restful.err("用户名存在");

      res.json(data);
    } else {
      const createUser = await user.insert({ userName, password })
      const data = restful.success("创建成功");

      res.json(data);
    }
  }

  async update () {
    const params = req.query;
    const { userName, password } = params;
    const hasUserName = await user.findOne({ userName })

    if (isVaildUserName(userName)) {
      const data = restful.err("用户名格式不正确");

      res.json(data);

      return false;
    }

    if (hasUserName) {
      const updateUser = await user.update({ userName }, { $set: { password } })
      const data = restful.success("更新成功");

      res.json(data);
    } else {
      userNotFind(res);
    } 
  }

  async userList () {
    const userList = await user.find();

    userList.toArray((err, result) => {
      const data = restful.success("成功", result);

      res.json(data);
    });
  }

  async deleteAll () {
    const userList = await user.remove();
    const data = restful.success("全部删除成功");

    res.json(data);
  }

  async deleteOne () {
    const params = req.query;
    const { userName } = params;
    const hasUserName = await user.findOne({ userName })

    if (isVaildUserName(userName)) {
      const data = restful.err("用户名格式不正确");

      res.json(data);

      return false;
    }

    if (hasUserName) {
      const userList = await user.remove({ userName });
      const data = restful.success("单个删除成功");

      res.json(data);
    } else {
      userNotFind(res);
    }
  }


}

function userNotFind(res) {
  const data = restful.err("用户名不存在");

  res.json(data);
}

function vaildUserName(userName, res) {
  if (isVaildUserName(userName)) {
    const data = restful.err("用户名格式不正确");

    res.json(data);

    return false
  }
}

export default new userServer();
  