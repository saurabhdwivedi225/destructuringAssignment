/* Nested Objects.
Write a function that takes an object representing a person as input,and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two properties. A sample object is given below. */

// Solution :- 

    const person = {
        name:"Saurabh Dwivedi",
        age:20,
        address:{
            street:"38,Block D, Industrial Area .",
            city: "Sector 67,Delhi",
            state:"Uttar Pradesh",
            country:"India"
        }
    };
 const extractNameAndStreet = (obj) => {
let {name} = obj;
let {address:{street}} = obj;
// or
// let {name,address:{street}} = obj;
 return {name,street};
 }
console.log(extractNameAndStreet(person)); 
      

