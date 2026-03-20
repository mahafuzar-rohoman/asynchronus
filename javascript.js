

// TODO Asynchronous practice  
// console.log("hello1")
// console.log("hello2")
// setTimeout( function () { // ? Asynchronous 
//     console.log("hello3")
// }, 5000)
// console.log("hello4") 


//  TODO Promise 
// let coffee = new Promise((res , rej) => {
//     if (true) {
//         return res() //? resolved
//     } else {
//         return rej() // ?reject
//     }
// }) ;
// coffee
// .then( function () {
//    console.log("resolved")
// })
// .catch (function () {
//     console.log("reject")
// })


// todo promise practice 
// let math = new Promise ((res, rej) => {
//     let n = Math.floor(Math.random() * 10) 
//     if (n < 5) {
//         return res() 
        
//     } else {
//         return rej ()
//     }
    
// }) ;
// math 
// .then (function () {
//     console.log("5 to digite number up")
// })
// .catch (function () {
//     console.log("5 to digite number down")
// })


// TODO Promise 
// const step1 = new Promise ((res, rej) => {
//     setTimeout ( () => {
//         res("step one done")
//     }, 2000)
// }) ;

// const step2 = new Promise ((res, rej) => {
//     setTimeout ( () => {
//         res("step Tow done")
//     }, 3000)
// })

// step1
// .then (function (res) {
//     console.log(res)
// })
// step2 
// .then(function (res) {
//     console.log(res)
// })

//TODO  Promise Data In Array Data  
// Promise.all([step1, step2])
// .then(function (res) {
//     console.log(res)
//     res.push("this name ")
// })

//TODO  First code execute apply method

// let name = new Promise ((rev, rej) => {
//     rev("we this name mahafuzar")
// });
// name 
// .then((rev) => {
//     console.log(rev)
// })

//TODO practice or condition 

        
//         resolve(data)
//     }, 3000)
// })
// dataFetch 
// .then((resolve) => {
//     console.log(resolve)
// })
// .catch((error) => {
//     console.log(error)
// }) 

//TODO practice condition 
// let number = new Promise(function (resolve, reject) {
//     let number = 10
//     if (number > 10) {
//         return resolve()
//     } else {
//         return reject()
//     }
// }) ;
// number 
// .then(function () {
//     console.log("number 10 the resolve ")
// })
// .catch (function () {
//     console.log("chose number 10 ")
// })let result = new Promise ((resolve, reject) => {
//     let success = false 
//     if (success) {
//       resolve("operation successful")
//     } else {
//         reject(" operation failed")
//     }
// })
// result 
// .then(function (resolve) {
//     console.log(resolve)
// })
// .catch((reject) => {
//     console.log(reject)
// })

// let dataFetch = new Promise ((resolve, reject) => {
//     let data = "User data loaded" 
//     setTimeout(() => {

// TODO api practice web site the link user random generator 
function randomUser () {
    fetch("https://randomuser.me/api/").then(function (raw) {
        return raw.json()
    }).then(function (data) {
        // console.log(data)
        // console.log(data.results) 
        // console.log(data.results.gender)
    } ).catch(function () {
        console.log("no date found")
    })
}
randomUser()

//TODO practice async practice 
// async function myFunction () {
//     console.log("async the await")
// }
// myFunction ()

//TODO Async and Await practice Api  
// const contender = document.querySelector(".continer")
// function randomApi () {
//     fetch('https://randomuser.me/api/').then(function (row) {
//        return row.json()
//     }).then(function (data) {
//         console.log(data) 
//         console.log(data.info) 
//         for ( i in data.info) {
//               console.log(i, data.info[i]) 
//               contender.innerHTML = i, data.info[i]
//         }
//     })
// }


//TODO api real project practice 
const contender = document.querySelector(".continer")

function randomApi () {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {

        let user = data.results[0]

        let output = `
            <div style="
                border:1px solid #ccc;
                padding:15px;
                width:250px;
                text-align:center;
                border-radius:10px;
                font-family:sans-serif;
            ">
                <img src="${user.picture.medium}" 
                     style="border-radius:50%; width:100px; height:100px;"/>

                <h2>${user.name.first} ${user.name.last}</h2>

                <p>${user.email}</p>

                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        contender.innerHTML = output 
        console.log(user)
    })
}

randomApi() 


//xamlHTTP api request  