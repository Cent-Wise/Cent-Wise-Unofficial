//Creating Group Schema

import mongoose, { trusted } from "mongoose";

const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    g_name: {
        type: String,
        required: true,
    },
    g_description: {
        type: String,
        required: true
    },
    g_description: {
        type: String,
        required: true
    },
    g_createdBy: {
        type: String,
        required: true,
       
    },
    User: {
        type: String,
        required: true,
        unique: true,

    }
   
},
{
    versionKey: false
});

const GroupModel = mongoose.model('group', GroupSchema);

export default GroupModel;