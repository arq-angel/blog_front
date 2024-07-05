const apiRequest = async ({ method = "GET", fetchUrl = '', authToken = '' }) => {
    const apiPublicToken = "2|LTBqZlXejYRxYHgpC6rHTSrnKSlIzimx9Jnxb73973c10e72";
    const apiUrl = "http://blog-back.cc/api/";

    try {
        const response = await fetch(`${apiUrl}${fetchUrl}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Public-Token': apiPublicToken,
                'Authorization': `Bearer ${authToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
};

export default apiRequest;
