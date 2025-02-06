const axios = require("axios");

const axiosFeedbackInstance = axios.create({
    baseURL: process.env.FEEDBACK_BASE_URL,

    // API authentication
    headers: {
        'key': process.env.FEEDBACK_API_KEY,
        'secret': process.env.FEEDBACK_API_SECRET,
    },
});

module.exports = axiosFeedbackInstance;