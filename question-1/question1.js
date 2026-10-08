/*
101564963 
Ghazaleh AzimiKorf 
Question 1 
*/

function lowerCaseWords(mixedArray) {

  return new Promise((resolve, reject) => {

    if (Array.isArray(mixedArray)) {
      // here is for keep only strings
      const words = mixedArray.filter((word) => typeof word == "string")
     // here is for change words to lowercase
      const lowerWords = words.map((word) => word.toLowerCase()) 
     resolve(lowerWords)
   } else {

      reject("Input must be an array")
     }
      })
}
const mixedArray = ['Pizza', 10, true, 25, false, 'Wings']

// here is for call the promise
lowerCaseWords(mixedArray)
.then((result) => {
   
    console.log(result)
})
.catch((error) => {
    console.log(error)
})
