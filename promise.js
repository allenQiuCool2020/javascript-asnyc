// Promises

// const promise = new Promise((resolve, reject) => {
//     const allWentWell = true;
//     if(allWentWell){
//         resolve('All things went well')
//     } else {
//         reject('Oops! Something went wrong')
//     }
// })

// console.log(promise);


// const promise = new Promise((resolve, reject) => {
//     const randomNumber = Math.floor(Math.random() * 10)
//     setTimeout(() =>{
//         if(randomNumber < 5){
//             resolve('it is less than 5')
//         }else{
//             reject('it is equalling larger than 5')
//         }
//     })
// })

// promise.then((value) => {
//     console.log(value);
    
// }).catch((error) => {
//     console.log(error);
    
// })


const promise = new Promise((resolve, reject) => {
    resolve('Well done! Promise One is Resolved')
})

const promiseTwo = new Promise((resolve, reject) => {
    resolve('Well done! Promise Two is Resolved')
})

const promiseThree = new Promise((resolve, reject) => {
    reject('Well done! Promise Three is Rejected.')
})


promise.then((value) => {
    console.log(value);
    return promiseTwo
    
}).then((value) => {
    console.log(value);
    return promiseThree
    
}).catch((error) => {
    console.log(error);
    
})
    
