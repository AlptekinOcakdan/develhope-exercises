async function getAsyncData() {
    try {
        const response = await fetch('https://northwind.vercel.app/api/products');
        return await response.json();
    } catch (error) {
        return error;
    }
}

getAsyncData()
    .then((data)=>console.log(data))
    .catch((e)=>console.log(e));
