//forEach loop function
//loops once per element in array
//forEach has two arguments, the array to
//iterate over and a callback function that like forEach
//iteration is just a bunch of loops?
//because you are simply returning the callback function
//on each element of the array you don't need to return
//anything
//array[i] is current value that is incremented as the loop repeats
//i is the index
//array is what we are iterating over


function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array)
    }
}
//array.prototype.map()
//map creates a new array with the results of the calling a callback
//function on each element inside of that array

//takes in an array and callback function as arguments
//applies the function to each element in the array
//keeps track of the results of each loop through the array
//returns a new array with those results

//not destructive or mutative

//we create a variable and set it to an empty array to return it at the end with the results of our callback
//the results of the callback are saved in a new variable
function mapFunction(array, callback) {
  let returnValue = []
  for (let i = 0; i < array.length; i++) {
    let newElements = callback(array[i], i, array)
    returnValue.push(newElements)
  }
  return returnValue
}


//what a filter function is doing under the hood
// let array = [1, 2, 3, 4, 5, 6];
// let odd = [];
// for(var i = 0; i < array.length; i++) {
//   if (array[i] % 3 === 0) odd.push(array[i]);
// }

let item = ["values", "in", "an", "array"]

function filter(collection, attribute, value) {
  for(const item of collection) {
    if(item[attribute] === value) {
      console.log(item)
    }
  }
}


let data = [
    { name: "Mr. Ruffles", species: "dog" },
    { name: "Felix", species: "cat" },
    { name: "Sir Woofington III", species: "dog" },
    { name: "Lord Banoonoo", species: "monkey" },
    { name: "Max", species: "dog" },
    { name: "Ziggy", species: "iguana" },
    { name: "Raptor", species: "canary" },
    { name: "Howard", species: "iguana" },
    { name: "Lemon", species: "cat" },
    { name: "Samuel", species: "monkey" },
    { name: "Joey", species: "iguana"}
]

// let species = data.filter(function(animal){
//   return animal.species ==== "dog"
// })

let species = []
for (var i = 0; i < data.length; i++) {
  species.push(data[i].species)
}
console.log(species)

//don't know how to make to be adapted for all species

// Write a function that takes this data as an argument and
// returns an object with a key for each unique species.
// Each key should point to an array containing all objects
// having that species. Each object should also be assigned a
// unique ID. (i.e. the first object in the array of dogs
// should have an id of 1, the next 2, etc.). This function
// should not be specific to this data set and should be
// written to accomodate any number of different spcies.
