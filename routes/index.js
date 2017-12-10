import userServer from './server/user'

export default app => {
  app.use('/user', userServer)
};

