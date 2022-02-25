import express from "express"
import { getUsers, createUser, deleteUser, getOneUser, updateUser} from "../controllers/user.js"
const router = express.Router()

router.get('/users', getUsers)
router.post('/users', createUser)
router.get('/users/:id', getOneUser)
router.delete('/users/:id',deleteUser)
router.put('/users/:id', updateUser)

export default router