import * as transactionServices from "../services/transaction-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";


export const find = async (request, response) => {
    try {
        const params = {...request.query}; 
        const transaction = await transactionServices.search(params);
        setResponse(transaction, response);

    } catch (error) {
        setErrorResponse(error, response, "find");
    }
}

export const post = async (request, response) => {
    try {
       const newTransaction = {...request.body};
       console.log(newTransaction);
       const transaction = await transactionServices.save(newTransaction);
       console.log(transaction);
       setResponse(transaction, response);

    } catch (error) {
        setErrorResponse(error, response, "post");
    }
}

export const get = async(request, response) => {
    try {
        const id = request.params.id;
        console.log(id);
        const transaction = await transactionServices.findById(id);
        setResponse(transaction, response);
    } catch (error) {
        setErrorResponse(error, response, "get");
    }
}


 
