const user = {
  id: 1,
  name: "John",
  age: 25,
};
function printUserFromLocalStorage() {
  const userJSON = localStorage.getItem('user');
  if (userJSON) {
    const user = JSON.parse(userJSON);
    console.log(user);
  } else {
    console.log('User data not found in localStorage');
  }
}

printUserFromLocalStorage();
