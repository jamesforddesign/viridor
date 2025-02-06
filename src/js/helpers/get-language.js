module.exports = function getLanguage() {
    // Get country code from URL segment
    const urlArray = window.location.pathname.split("/");

    // Check if multilingual, if so return country code
    if (process.env.MULTILINGUAL == 'true') {
        return urlArray[1];
    }
        
    // Otherwise, just return English 
    return 'en';
};