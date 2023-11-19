//Importing TransactionModel
import Transaction from "../models/transaction.js";


export const search = async (params = {}) => {
    const transaction = await Transaction.find(params).exec(); //exec() returns promise
    return transaction;
}

export const save = async (newTransaction) => {
    const transaction = new Transaction(newTransaction);
    return await transaction.save();
}

export const find = async (id) => {
    const transaction = await Transaction.findById(id).exec();
    return transaction;
}
