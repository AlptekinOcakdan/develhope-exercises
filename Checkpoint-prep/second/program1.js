// PROGRAM 1.
// async/await, fetching data using the Fetch API, error handling with try/catch,
// manipulation of the fetched data using Array methods (filter and map), and usage of Object methods (Object.assign).

// Fetch data from a mock API
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await response.json();
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
}

async function processData() {
    try {
        const data = await fetchData();

        const filteredData = data.filter((item) => item.userId === 1);
        const mappedData = filteredData.map((item) => ({
            id: item.id,
            title: item.title.toUpperCase()
        }));
        const objectData = Object.assign({}, ...mappedData.map((item) => ({[item.id]: item.title})));
        console.log('Filtered and mapped Data: ', mappedData);
        console.log('Object data:', objectData);

        return objectData;
    } catch (e) {
        console.log('Error: ', e);
        throw e;
    }
}

processData()
    .then((result) => console.log('Final Result: ', result))
    .catch((error) => console.log('Error: ', error));

/*
1.	We start with the fetchData() function. It is an asynchronous function that fetches data from the "https://jsonplaceholder.typicode.com/posts" API endpoint.

2.	Inside the fetchData() function, we use the fetch() function to make a GET request to the specified API endpoint.
This returns a Promise that resolves to the response.

3.	We use the await keyword to pause the execution and wait for the response to be fetched.
The response is stored in the response variable.

4.	We then check the ok property of the response object to ensure that the API request was successful.
If it was not successful, an error is thrown using the throw keyword.

5.	If the request was successful, we use the json() method on the response object to parse the response and extract the JSON data.
This method also returns a Promise that resolves to the parsed JSON data.

6.	Again, we use the await keyword to pause the execution and wait for the JSON data to be parsed.
The parsed data is returned from the fetchData() function.

7.	Next, we have the processData() function. It is also an asynchronous function responsible for manipulating the fetched data.

8.	Inside the processData() function, we call the fetchData() function to retrieve the data using await.
The returned data is stored in the data variable.

9.	The code then demonstrates the usage of Array methods on the fetched data.
First, we filter the data to only include items where the userId is equal to 1 using the filter() method.
Then, we map the filtered data to create a new array of objects with modified properties using the map() method.

10.	Next, the code showcases the usage of Object methods.
We use Object.assign() to merge the mapped data objects into a single object, where the object keys are the id and the values are the capitalized title.

11.	The filtered and mapped data is logged to the console using console.log(). Additionally, the object data is also logged.

12.	The objectData is returned from the processData() function.

13.	Finally, the program calls the processData() function, and the resulting promise is handled using
.then() to log the final result to the console or .catch() to log any errors that occur during execution.
*/