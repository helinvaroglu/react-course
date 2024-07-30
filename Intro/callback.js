//to start at command projmpt, node callback.js

//time out indicates how many times should it wait to execute since we have started (2000 millisecond = 2 seconds)

// setTimeout(() => {
//     console.log("Hello");
// }, 2000);     


//interval indicates how many times should it wait until the next repeat

// setInterval(() => {
//     console.log("1 second passed!");
// }, 1000);


// const merhabaDe = (cb) => {
//     cb();       
// };

// merhabaDe(() => {
//     console.log("Merhaba");
// });


//fetch islemi:

import fetch from "node-fetch";     //node-fetch yerine axios lib kullanilabilir, daha kullanisli
import axios from "axios";      //axios ta json yazmaya gerek yok

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())        //linkteki API'dan gelenleri json a parse ediyoruz
//     .then((users) => {      //gelenler users a dusuyor
//         fetch('https://jsonplaceholder.typicode.com/posts/1').then(data => data.json()).then(posts =>console.log(posts));     //posts un users tan sonra olmasini istedigimiz icin bu sekilde yapiyoruz
//         //eger 1 dersek sadece ilk postu doner
//     });       

    
//fetch islemi - kisa yol:
//async and await will make all the data ordered in the way they coded.

// async function getData(){      
//     const { data: users } = await (
//         await axios("https://jsonplaceholder.typicode.com/users"));

//     const { data: post1 } = await (
//         await axios ("https://jsonplaceholder.typicode.com/posts/1"));

//     const { data: post2 } = await (
//         await axios ("https://jsonplaceholder.typicode.com/posts/2"));

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// }

// getData();


//promise:

// const getComments = (number) => {
//     return new Promise((resolve, reject) => {       //eger resolve olursa kod calismaya devam eder, reject olursa catch e duser
//         if (number === 1) {
//             resolve({ text: "Worked!"});
//         }
//         reject("There is a problem!");
//     });
// };

// getComments(3)      //eger 1 olursa resolve diger turlu catch e duser
//     .then((data) => console.log("Finished"))
//     .catch((e) => console.log(e));


const getUsers = () => {
    return new Promise(async(resolve, reject) => {       //eger resolve olursa kod calismaya devam eder, reject olursa catch e duser
        const {data} =  await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
    });
};

const getPost = (post_id) => {
    return new Promise(async(resolve, reject) => {       
        const {data} =  await axios(
            "https://jsonplaceholder.typicode.com/posts/" + post_id
        );
        resolve(data);
        //reject("Problem!");
    });
};

(async () => {
    try {
        const users = await getUsers();
        const post = await getPosts(1);

        console.log(users);
        console.log(post);
    }
    catch(e) {
        console.log(e);
    }
})();



