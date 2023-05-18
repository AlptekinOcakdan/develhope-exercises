function saveUserToLocalStorage(user) {
  const userJSON = JSON.stringify(user);
  localStorage.setItem('user', userJSON);
}

const user = {
  id: 1,
  name: "John",
  age: 25,
};

saveUserToLocalStorage(user);
