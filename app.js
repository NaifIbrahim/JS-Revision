// var a = "naif ibrahim" 
// console.log(a)


//LOOPS //
// for (var num = 1; num<= 10; num++ ){
//     var tableOf = 8;
//     console.log(tableOf + " * " + num + " = " + tableOf * num)
// }

// for (var num = 1; num<= 10; num++ ){
//     var tableOf = 9;
//     console.log(tableOf + " * " + num + " = " + tableOf * num)
// }

// for (var num = 1; num<= 10; num++ ){
//     var tableOf = 12;
//     console.log(tableOf + " * " + num + " = " + tableOf * num)
// }

//FUNCTIONS //
// function sum (a,b){
//     var total = a+b
//     console.log(total);
// }
// sum(100,200)
// sum(100,500)

// Anonnymous function //
// var anonnymous = function(a,b){
//     return a+b
// }
// console.log(anonnymous(100,500))

// Arrow function //
// const sum = () => {

// }

// TEMPLATE LITERALS // 
// for (var num = 1; num<= 10; num++ ){
//     var tableOf = 12;
//     console.log(`${tableOf}*${num}=${tableOf*num}`)
// }

// ARRAY/FOR IN FOR OFF LOOP //

// var myFriends = ['muzammil','faheem','huzaifa','mustafa','hanzalah'];

// for(i=0;i<myFriends.length;i++){
//     console.log(myFriends[i])
// }

// for(let elements in myFriends){
//     console.log(elements)
// }

// for(let elements of myFriends){
//     console.log(elements)
// }

// myFriends.forEach(function(element,index,array){
//     console.log(element,index,array)
// }) 

// CRUD METHOD
// PUSH /add elements in last
// var animals = ['sheep','goat','cow']
// console.log(animals)
// animals.push('chicken','camel','buffalo')
// console.log(animals)

// UNSHIFT /add elements in starting
// var animals = ['sheep','goat','cow']
// console.log(animals)
// animals.unshift('chicken','camel','buffalo')
// console.log(animals)

// POP / removes the last element
// var animals = ['sheep','goat','cow']
// console.log(animals)
// animals.pop()
// console.log(animals)

// POP / removes the first element
// var animals = ['sheep','goat','cow']
// console.log(animals)
// animals.shift()
// console.log(animals)

// SPLICE
// var months = ['jan','feb','march','april','may']
// console.log(months)
// const newMonth = months.splice(months.length,0,'june','july')
// console.log(months)

// var months = ['jan','feb','march','april','may']
// const newMonth = months.splice(2,1,'March')
// console.log(months)
// console.log(newMonth)

// .MAP /returns new array
// const array1 = [1,2,3,4,5,6]
// let newArray = array1.map((CurElem,index,array) => {
//      return CurElem > 3;
// })
// console.log(array1)
// console.log(newArray)

// let arr = [25,36,49,64,81]

// let newArr = arr.map((CurElem) => Math.sqrt(CurElem) )
// console.log(newArr)

let arr1 = [2,3,4,6,8]
let arr2 = arr1.map((CurElem) => CurElem*2).filter((CurElem) => CurElem > 10).reduce((accumalator,CurElem,index,arr) => { return accumalator += CurElem})
console.log(arr2)








