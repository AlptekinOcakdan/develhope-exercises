// function capitalizeWords(stringArray) {
//
//     return stringArray.map((str) => str[0].toUpperCase() + str.slice(1));
//
// }
//
// console.log(capitalizeWords(["hello", "world"]));

// function isPalindrome(str) {
//     return str === str.split("").reverse().join("");
// }
//
// console.log(isPalindrome("racecar"))

async function fetchData() {
    const data = await fetch("https://northwind.vercel.app/api/products/11");
    const result = await data.json();
    const {name,unitPrice=data} = result;
    localStorage.setItem("name",name);
    localStorage.setItem("unitPrice",unitPrice);
}

fetchData().then((data)=>console.log(data));

