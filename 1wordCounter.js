/*1. Count the occurrences.
You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.*/

// Solution:-

 function wordCounter(string) {
    const words = string.split(" ");
    const myMap = new Map();
  
    for (let word of words) {
      if (myMap.has(word)) {
        myMap.set(word, myMap.get(word) + 1);
      } else {
        myMap.set(word, 1);
      }
    }
  
    return myMap;
  }
  
  const inputedString= "Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.";
  console.log(wordCounter(inputedString));