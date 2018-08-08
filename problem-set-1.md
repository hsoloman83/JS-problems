### Problem Set 1

#### 1. Iteration

Using only `for` loops, write each of the following methods

1. A function that simulates `forEach`
2. A function that simulates `map`
3. A function that simulates `filter`

Remember that each of these methods receives a callback as its argument.



#### 2. Objects

Inspect the data below: 

```js
	let data = [
		{
			name: "Mr. Ruffles",
			species: "dog"
		},
		{
			name: "Felix",
			species: "cat"
		},
		{ 
			name: "Sir Woofington III",
			species: "dog"
		},
		{
			name: "Lord Banoonoo",
			species: "monkey"
		},
		{
			name: "Max",
			species: "dog"
		},
		{
			name: "Ziggy",
			species: "iguana"
		},
		{
			name: "Raptor",
			species: "canary"
		},
		{
			name: "Howard",
			species: "iguana"
		},
		{
			name: "Lemon",
			species: "cat"
		},
		{
			name: "Samuel",
			species: "monkey"
		},
		{
			name: "Joey",
			species: "iguana"
		}
	]
```

Write a function that takes this data as an argument and returns an object with a key for each unique species. Each key should point to an array containing all objects having that species. Each object should also be assigned a unique ID. (i.e. the first object in the array of dogs should have an id of 1, the next 2, etc.). This function should not be specific to this data set and should be written to accomodate any number of different spcies.