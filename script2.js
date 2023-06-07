import { writeFile } from "node:fs";

export const b = 24;

writeFile('santa.js', '', (err) => {
   if(err) throw Error
})
