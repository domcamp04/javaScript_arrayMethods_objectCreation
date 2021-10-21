console.log('Hi Dom!:)')


//  -------------------------Array Methods-------------------------
//  Looipng with arrays and strings
//  Creating an array
let names = ['Jim', 'Alice', 'Fred', 'Bill', 'Margaret']

//  Method 1 of looping through an array
//  Getting names
for (let n of names){
    console.log(n)
}

//  Method 2 of looping through an array with array.length
//  Getting indices
for (let i = 0; i < names.length; i++){
    console.log(i)
}
//  Getting names and indices
for (let i = 0; i < names.length; i++){
    console.log(i, names[i])
}

//  Create a string (also an iterable)
let sentence = 'This is my sentence';

//  Method 1 loop through string - for ... of
for (let letter of sentence){
    console.log(letter)
}

//  Method 2 - for and string length
for (let i = 0; i < sentence.length; i++){
    console.log(i, sentence[i])
}

console.clear() //-------------------------------------------

let newNames = ['Justin', 'Nicole', 'Molly', 'Charlie']

//  Create a function to be our callBackFunction ('element', 'index', 'array')

function callBack(el, idx, arr){
    console.log(el.toUpperCase(), idx, arr)
}

//  Using the .foreach() method
newNames.forEach(callBack)

//  Above as arrow function
newNames.forEach(e => console.log(e))


//  Array.map() method
let myNumbers = [1, 2, 3, 4, 5, 6]

function squareNum(num, idx, arr){
    if (idx % 2 == 0){
        return num ** 3
    } else{
        return num ** 2
    }
}

let squareNums = myNumbers.map(squareNum)

console.log(squareNums);
console.log(myNumbers);

// Above as arrow function
// let exponentNums = myNumbers.map(el > el **2 )
// console.log(exponentNums);


console.clear() //------------------------------------------------------

//  Array.filter() method
let cities = ['Chicago', 'Charlotte', 'Boston', 'Columbus', 'Austin']

function isCName(city){
    return city[0].toUpperCase() === 'C'
}

let cNameCities = cities.filter(isCName)
console.log(cNameCities)

let bNameCities = cities.filter(city => city[0].toUpperCase() === 'B')
console.log(bNameCities);

console.clear() //---------------------------------------------------

//  Array.reduce() method
let nums = [2, 4, 6, 8, 10]

function myReducer(prevValue, currentValue){
    console.log(prevValue, currentValue);
    return prevValue + currentValue;
}

let numsReduced = nums.reduce(myReducer)

console.log(numsReduced);

console.clear() //------------------------------------------------------

//  Array.slice() simliar to python but only has start and end instead of start, step, end
//  Inclusive of start index but exclusive of end index

let colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

console.log(colors)

console.log(colors.slice(2, 5))
console.log(colors.slice(-3))

console.log(colors.slice(3))

console.clear() //-------------------------------------------------------

//  Array.splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//  .splice('index you want to start at', 'number of items you want to delete from original array', 'add item into list')
console.log(colors)
console.log(colors.splice(3, 1, 'Pink', 'Turquoise'))
console.log(colors)









