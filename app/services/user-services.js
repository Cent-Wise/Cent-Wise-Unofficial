//Importing UserModel 
import User from "../models/users.js";


export const search = async (params = {}) => {
    const users = await User.find(params).exec(); //exec() returns promise
    return users;
}

export const save = async (newUser) => {
    const user = new User(newUser);
    return await user.save();
}

export const find = async (id) => {
    const users = await User.findById(id).exec();
    return users;
}

export const update = async (id) => {
    const users = await User.findByIdAndUpdate(id, updatedUser).exec();
    return users;
}

export const remove = async (id) => {
    return await User.findByIdAndDelete(id).exec();;
}
