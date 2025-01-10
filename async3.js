
// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         description: 'Iphone 18',
//         price: '1000',
//         rating: '5'
//     })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error))

const getAllProducts = async () => {
    try{
        const response = await fetch('https://dummyjson.com/products/');
        const json = await response.json();
        console.log(json);      
    } catch (error){
        console.log(error);
    
    }
}
    
getAllProducts()