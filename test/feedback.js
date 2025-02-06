const assert = require('assert');
const https = require("https");

// Load environment variables from .env file
require('dotenv').config();

const feedbackActive = process.env.FEEDBACK_ACTIVE === 'false';

describe('Feedback form submission', () => {
    const axiosFeedbackInstance = require('../axios-feedback-instance');

    // Test we can successfully connect to the feedback endpoint
    (feedbackActive ? it.skip : it)('should post feedback data to endpoint and return 200 status', async () => {
        try {          
            let formData = {
                "first_name": "John",
                "last_name": "Doe",
                "email": "digital@jfd.co.uk",
                "postcode": "GL50 1TA",
                "1-question": "Question 1 response",
                "1-question-1": "Question 1 subquestion"
            };
    
            const response = await axiosFeedbackInstance
                .post(`/api/feedback-form/${process.env.FEEDBACK_MAP_ID}`, formData, {
                    // Only bypassing SSL as we're testing - NEVER bypass SSL in production
                    httpsAgent: new https.Agent({
                        rejectUnauthorized: false
                    })
                })
  
            assert.strictEqual(response.status, 200);
        } catch (error) {
            assert.fail(`Request failed: ${error.message}`);
        }
    });
});