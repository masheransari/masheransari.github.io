exports.handler = async (event, context) => {
    const { queryStringParameters } = event;
    const { code, state, error } = queryStringParameters;

    // Log the parameters to the Netlify logs
    console.log("Received callback with code:", code);
    console.log("State:", state);
    console.log("Error:", error);

    // You can also send this data to an external service or save it in a database

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Logged callback successfully" }),
    };
};