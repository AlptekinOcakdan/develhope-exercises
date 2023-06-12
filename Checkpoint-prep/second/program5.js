// PROGRAM 5
// API, fetching their respective posts, and processing the data
class User {
    constructor(id, name, username) {
        this.id = id;
        this.name = name;
        this.username = username;
    }
}

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        return users.map((user) => new User(user.id, user.name, user.username));
    } catch (e) {
        console.log('Error: ', e);
        throw e;
    }
}

async function fetchUserPosts(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        return await response.json();
    } catch (e) {
        console.log('Error: ', e);
        throw e;
    }
}

async function processUserPosts() {
    try {
        const users = await getUsers();
        const userPostsPromises = users.map(async (user) => {
            const posts = await fetchUserPosts(user.id);
            return {
                user: user.username,
                posts: posts.length,
            };
        });
        const userPosts = await Promise.all(userPostsPromises);
        console.log('User Posts: ', userPosts);
    } catch (e) {
        console.log('Error: ', e);
        throw e;
    }
}

processUserPosts()
    .then(() => {
        console.log('Processing of user posts completed');
    })
    .catch((error) => {
        console.log('Error: ', error);
    });


/*
1.	We start by defining a class called User.
It has a constructor that takes in id, name, and username as parameters and assigns them to the corresponding properties of the class.

2.	We define an asynchronous function called getUsers.
Inside this function, we use fetch to make a request to the provided URL and retrieve a list of users in JSON format.

3.	We await the response and use response.json() to parse the response body as JSON data.

4.	We map over the retrieved users array and create new User instances for each user by passing the corresponding properties.

5.	The array of created User instances is then returned.

6.	The fetchUserPosts function is defined to retrieve posts for a given userId.
It follows a similar pattern as getUsers, making a request to the provided URL with the userId as a query parameter.

7.	The response is awaited, and the JSON data is parsed and returned.

8.	The processUserPosts function is defined as an asynchronous function.

9.	Inside this function, we first call getUsers to retrieve the list of users.

10.	We create an array of promises, userPostsPromises, using map on the users array.
Each promise represents fetching and processing the posts for a particular user.

11.	For each user, we use fetchUserPosts to retrieve their posts.
We then return an object containing the user's username and the number of posts they have.

12.	We use Promise.all to await all the promises in the userPostsPromises array and store the results in the userPosts variable.

13.	Finally, we log the userPosts array to the console.

14.	The processUserPosts function includes error handling using try and catch.
If an error occurs, it is caught, logged to the console, and handled.

15.	In the usage section, we call the processUserPosts function.

16.	We chain a .then() callback to the function call, which logs a message to the console indicating that the processing of user posts is completed.

17.	We also chain a .catch() callback to handle any errors that occur during the execution.
*/

