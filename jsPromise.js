/*

Promise
1] It is used to handle asynchronous operation in javascript.
2] Promise is object that represent eventual completion or failure of async operation and its resulting value 

promise store two type of data
1] promise State
state consist of three types, fulfilled, pending and rejected
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

2] promise Result
it is where the data is store inside it 

Promise has inbuilt function with 2 predefine argument resolve and reject
promise object are immutable therefore one of the best to use for async api operation because it could not be manipulated.

example are as follows
fetch() => fetch is an async function and as we know async function always return value as promise 

.then() => is callback function which is attached to promise which maintain code control and easy to maintain the data 

so rather than passing callback function as an argument we are attaching callback function using .then() 

then() => is a special chaining fucntion is of which is attached to promise object to perform operation 

promise object value cannot be access directly.

*/

console.log("-------------------");

const USER_API_LINK = "https://jsonplaceholder.typicode.com/users";

const userData = fetch(USER_API_LINK);

console.log(userData);

fetch(USER_API_LINK).then((res) => res.json());

/*
  How .then() chain function help us to prevent callback hell situation

  here it is an example of callback hell
  */

const cart = ["tshirt", "shirt", "pants", "books"];

function createOrder(cart) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderInvoice(
      paymentInfo,
      function sendInvoiceEmail(userName, userEmail) {
        console.log("Invoice is emailed to ", userName, " on Email", userEmail);
      }
    );
  });
}

/* 
this above callback hell problem is solved with .then chain function call promise chaining 
checkout below solution 
*/

// normal function
// createOrderData(cart)
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return showOrderInvoice(paymentInfo);
//   })
//   .then(function (paymentInfo) {
//     return sendInvoiceEmail(paymentInfo, username, usermail);
//   });

// arrow function
// createOrderData(cart)
//   .then((orderId) => proceedToPayment(orderId))
//   .then((paymentInfo) => showOrderInvoice(paymentInfo))
//   .then((paymentInfo) => sendInvoiceEmail(paymentInfo, username, usermail));

/*
 always have a note 

 function should be return other wise lead to error or do not execute the callback function 
 
 How to create your own promise in javascript ?
 It is created with predefine function inside js lib

  1] do an async task
  
  2] password encription before storing in database
  
  3] Note resolve and reject are one of the core function in promise it will help you to know the whether data will be forewarded to next then function
  
  4] then() function will only be executed only resolve is called in promise

 */

const promiseVal = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("\n-----------Example 1 -----------");

    console.log("Async Task 1 is Completed !!");
    resolve();
  }, 5000);
});

promiseVal.then(() => console.log("Promise 1 is consumed !!"));

// industry based syntax format

new Promise((resolve, reject) => {
  // async function
  setTimeout(() => {
    console.log("\n-----------Example 2 -----------");

    console.log("Async Function 2 is Completed !");
    resolve();
  }, 5000);
}).then(() => console.log("Promise 2 is Completed !!"));

// example 3

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("\n-----------Example 3 -----------");

    let error = true;

    if (!error) {
      resolve({
        username: "Darsh",
        skill: "full stack developer",
        email: "darsh@gmail.com",
        password: "123456",
      });
    } else {
      reject("ERROR : Something went wrong !");

      // if your declaring for reject then catch statement is must otherwise will lead to error
    }
  }, 5000);
})
  .then((res) => {
    console.log(res);
    return res;
    // to get object indiviual value you need to return them in parent then() and chain them with new then() which will
    // parent  then return will be pass on as input of next then function without return it will show undefine error.
  })
  .then((res) => console.log(res.username, res.email, res.skill, res.password))
  .catch((error) => console.log(error))
  .finally(() => console.log("Promise Execution is completed !"));

// example 4
/* but another approach to handle promise is using async await function */

const promiseData = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("\n-----------Example 4 -----------");

    let error = false;

    if (!error) {
      resolve({
        username: "Darsh",
        skill: "full stack developer",
        email: "darsh@gmail.com",
        password: "123456",
      });
    } else {
      reject("ERROR : Something went wrong !");

      // if your declaring for reject then catch statement is must otherwise will lead to error
    }
  }, 5000);
});

async function promiseHandle() {
  try {
    const result = await promiseData;
    console.log(result);
  } catch (error) {
    console.log("Error : Something went wrong !", error);
  }
}

promiseHandle();

// Promise API CAlls

// when you have multiple api requests
/*


Types of Promise 


1] promise.all([pr1, pr2, pr3])

in this all promise are be executed simultaneously
all are passed execute and fetch their api data 

it is specifically used when we want to execute multiple api call at same time but it  follows all or none approach 

let us understand it with example

case 1 = all api a have success output then all promise.all with display the promise date in combination of array 
[[value1],[value2],[value3]] 

case 2 = one api failed to generate output then promise.all() will directly display error 
whether other api have successfully generated output result but any one api failed lead to complete failure



2] promise.allSettled([pr1, pr2, pr3])







*/
