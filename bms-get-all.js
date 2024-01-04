/**
 * MUST RUN IN-BROWSER
 */

(async function() {
    const USER_TOKEN = localStorage.getItem('access_token');

    const resources = await fetchResources();

    console.log(resources);


    async function fetchResources() {
        const url = `https://a3-prod.flit.to:1443/v2/bms/resources?offset=0&_method=GET`; /* &limit=15 */

        const options  = {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + USER_TOKEN,  'content-type': 'application/json' }
        };
        
        let response = await fetch(url, options);

        if (!response.ok) {
            const message = `Fetching of place ${placeId} details failed w/ status: ${response.status}`;
            console.log(message);
            throw new Error(message);
        }

        let responseBody = await response.text();    
        
        return responseBody ? JSON.parse(responseBody) : null;
        }
})()