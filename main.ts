import { reverseString, countCharacters, UpperCase } from "./stringUtils";
import fs from "fs";

console.log(
  reverseString(
    "It is important to learn Node.js in order to debug your code without using the browser."
  )
);
console.log(
  countCharacters(
    "It is important to learn Node.js in order to debug your code without using the browser."
  )
);

console.log(
  UpperCase(
    "It is important to learn Node.js in order to debug your code without using the browser."
  )
);

const reversedSentence = reverseString(
  "It is important to learn Node.js in order to debug your code without using the browser."
);

fs.writeFileSync("reversed.txt", reversedSentence);
console.log("File written successfully");
