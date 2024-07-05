const LogResponse = ({message = null, error = null , debug = null}) => {
    if (message) {
        console.log("Message: ", message)
    }
    if (error) {
        console.log("Error: ", error)
    }
    if (debug) {
        console.log("Debug: ", debug)
    }
}

export default LogResponse;
