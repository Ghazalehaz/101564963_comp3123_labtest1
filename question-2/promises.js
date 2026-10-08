/*
101564963 
Ghazaleh AzimiKorf 
Question 2
*/

// here is for resolve promise
function resolvedPromise() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve({message: "delayed success!"})
        }, 500)
  })
}
// here is for reject promise
function rejectedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject({error: "delayed exception!"})
        }, 500)
    })
}
// here is for call both promises
resolvedPromise()
.then((result) => {
 console.log(result)
})
.catch((error) => {
    console.log(error)
})

rejectedPromise()
.then((result) => {
    console.log(result)
})

.catch((error) => {
    console.log(error)
})
