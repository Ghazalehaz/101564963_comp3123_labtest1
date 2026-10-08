/*
101564963 
Ghazaleh AzimiKorf 
Question 3
*/
const fs = require("fs")
const path = require("path")
const logPath = path.join(process.cwd(), "Logs")

// here is for create Logs folder
if (!fs.existsSync(logPath)) {
  fs.mkdirSync(logPath)
}
process.chdir(logPath)

// for create 10 files
for (let i = 0; i < 10; i++) {
 let filename = "log" + i + ".txt"
 fs.writeFileSync(filename, "This is log file " + i)
   console.log(filename)
}
