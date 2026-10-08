/*
101564963 
Ghazaleh AzimiKorf 
Question 3
*/
const fs = require("fs")
const path = require("path")
const logPath = path.join(process.cwd(), "Logs")
// here is for check Logs folder
if (fs.existsSync(logPath)) {

 const files = fs.readdirSync(logPath)
 //for delete files 
 files.forEach((file) => {
     console.log("delete files..." + file)
     fs.unlinkSync(path.join(logPath, file))
 })
    fs.rmdirSync(logPath) // here is for remove Logs folder
}
