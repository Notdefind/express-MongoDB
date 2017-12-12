import userServer from './server/user'
import pageServer from './page'
export default app => {
  app.use('/user', userServer)
  app.use('/', pageServer)
};

