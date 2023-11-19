//Importing GroupModel 
import Group from "../models/group.js";


export const search = async (params = {}) => {
    const group = await Group.find(params).exec(); //exec() returns promise
    return group;
}

export const save = async (newGroup) => {
    const group = new Group(newGroup);
    return await group.save();
}

export const find = async (id) => {
    const group = await Group.findById(id).exec();
    return group;
}

export const update = async (id) => {
    const group = await Group.findByIdAndUpdate(id, updatedGroup).exec();
    return group;
}

export const partialUpdate = async (id) => {
    const group = await Group.findByIdAndUpdate(id, updatedGroup).exec();
    return group;
}

export const remove = async (id) => {
    return await Group.findByIdAndDelete(id).exec();;
}
