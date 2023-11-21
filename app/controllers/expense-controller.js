import * as expenseServices from "../services/expense-services.js";
import { setResponse, setErrorResponse } from "./response-handler.js";


export const post = async (request, response) => {
      try{
            const newExpense = {...request.body};
            const expense = await expenseServices.save(newExpense);
            setResponse(expense, response);
      }catch(error){
            setErrorResponse(error, response, "post");
      }
}

export const get = async (request, response) => {
      try{
            const id = request.params.id;
            const expense = await expenseServices.find(id);
            setResponse(expense, response);
      }catch(error){
            setErrorResponse(error, response, "get");
      }
}

export const updateAll = async (request, response) => {
      try{
           const id = request.params.id;
           const updatedExpense = {...request.body};

           const expense = await expenseServices.update(id, updatedExpense);
           setResponse(expense, response);
      }catch(error){
            setErrorResponse(error, response);
      }
}

export const update = async(request, response) => {
      try{
            const id = request.params.id;
            const updatedExpense = {...request.body};

            const expense = await expenseServices.patch(updatedExpense, id);
            setResponse(expense, response);
      }catch(error){
            setErrorResponse(expense, response);
      }
}

export const deleteExpense = async (request, response) => {
      try{
            const id = request.params.id;
            const expense = await expenseServices.remove(id);
            setResponse({"Delete": true}, response);
      }catch(error){
            setErrorResponse(error, response);
      }
}