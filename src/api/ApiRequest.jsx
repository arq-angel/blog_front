import {useEffect} from 'react'

const ApiRequest = ({method= "GET", fetchUrl = '', authToken = '', onDataFetch}) => {
    const apiPublicToken = "2|LTBqZlXejYRxYHgpC6rHTSrnKSlIzimx9Jnxb73973c10e72";
    const apiUrl = "http://blog-back.cc/api/"

    useEffect(() => {

        const fetchData = async () => {
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
                onDataFetch(result); // Call the callback with the fetched data
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        }

        fetchData();
    }, [method, fetchUrl, authToken, onDataFetch]);  // Empty dependency array means this effect runs once after initial render

    return null;
}

export default ApiRequest;