import express from 'express'

import userServer from '../../controllers/user.server';

const router = express.Router()
const { create, userList, update, deleteAll, deleteOne } = userServer;

router.get("/create", userServer.create);
router.get("/getList", userList);
router.get("/update", update);
router.get("/deleteAll", deleteAll);
router.get("/deleteOne", deleteOne);

export default router;