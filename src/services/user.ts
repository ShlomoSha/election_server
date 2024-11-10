import { compare, hash } from "bcrypt";
import { loginDTO } from "../DTO/user";
import User from '../models/user'

export const userLogin = async (user: loginDTO) => {
    try {
        const userFromDatabase = await User.findOne({username: user.username})
        if (!userFromDatabase) throw new Error("user not found")
        const match = await compare(user.password, userFromDatabase.password)
        if (!match) throw new Error("wrong password")
        return userFromDatabase
    } catch (err) {
        throw err
    }
}

export const createNewUser = async (user: loginDTO) => {
    try {
        if (!user.password) throw new Error("Missing user data, [password] is require")
        const encPass = await hash(user.password, 10)
        user.password = encPass
        const newUser = new User(user)
        return await newUser.save()        
    } catch (err) {
        console.log(err)
        throw new Error("Can't create new user")
    }
}