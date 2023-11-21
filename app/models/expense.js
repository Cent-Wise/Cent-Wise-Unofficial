import mongoose, { trusted } from "mongoose";

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
      e_description: {
            type: String,
            required: true
      },
      e_amount: {
            type: Number,
            required: true
      },
      currency: {
            type: String,
            required: true
      },
      e_createdBy: {
            type: String,
            required: true
      },
      Group: {
            type: String
      },
      User: {
            type: String,
            required: true
      },
      e_date: {
            type: Date,
            required: true
      },
      e_partition: {
            type: String,
            required: true
      }
},
{
      versionKey: false
});

const ExpenseModel = mongoose.model('expense', ExpenseSchema);

export default ExpenseModel;