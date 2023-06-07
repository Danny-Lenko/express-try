import { readFile } from "node:fs";

readFile('santa.txt', (err, data) => {
   if (err) throw Error
   console.time('duration')
   const bracketsArr = data.toString().split('')
   const res = bracketsArr.reduce((acc, cv) => {
      const value = cv === '(' ? 1 : -1
      return acc + value
   }, 0)
   console.log(res)
   

   console.timeEnd('duration')
})
