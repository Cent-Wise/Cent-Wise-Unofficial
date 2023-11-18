//Function to set response
export const setResponse = (data, response) => {
    response.status(200)
        .json(course);
}

//Function to show error message
export const setErrorResponse = (err, response) => {
    response.status(500)
        .json({
            code: "ServiceError",
            message: "Error occured while processing your request."
        })
}