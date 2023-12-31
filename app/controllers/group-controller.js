import * as groupServices from "../services/group-services.js";
import { setResponse, setErrorResponse } from "./response-handler.js";


export const findByParams = async (request, response) => {
    try {
        const params = {...request.query}; 
        const group = await groupServices.search(params);
        setResponse(group, response);

    } catch (error) {
        setErrorResponse(error, response, "find");
    }
}

export const post = async (request, response) => {
    try {
       const newGroup = {...request.body};
       console.log(newGroup);
       const group = await groupServices.save(newGroup);
       console.log(group);
       setResponse(group, response);

    } catch (error) {
        setErrorResponse(error, response, "post");
    }
}

export const findById = async(request, response) => {
    try {
        const id = request.params.id;
        console.log(id);
        const group = await groupServices.find(id);
        setResponse(group, response);
    } catch (error) {
        setErrorResponse(error, response, "get");
    }
}

export const put = async(request, response) => {
    try {
        const id = request.params.id;
        const updatedGroup = {...request.body};
    
        const group = await groupServices.update(id, updatedGroup);
        setResponse(group, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}
export const patch = async(request, response) => {
    try {
        const id = request.params.id;
        const updatedGroup = {...request.body};
    
        const group = await groupServices.patch(id, updatedGroup);
        setResponse(group, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

export const remove = async(request, response) => {
    try {
        const id = request.params.id;
        const group = await groupServices.remove(id);
        setResponse({"Delete":true}, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}