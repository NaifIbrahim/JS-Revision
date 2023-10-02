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

// MATH SQUARE ROOT
// let arr = [25,36,49,64,81]
// let newArr = arr.map((CurElem) => Math.sqrt(CurElem) )
// console.log(newArr)

// MAP+FILTER AND REDUCE METHOD
// let arr1 = [2,3,4,6,8]
// let arr2 = arr1.map((CurElem) => CurElem*2).filter((CurElem) => CurElem > 10).reduce((accumalator,CurElem,index,arr) => { return accumalator += CurElem})
// console.log(arr2)

// ESCAPE CHARACTERS
// let sentence = "My name is \"Naif\""
// console.log(sentence)

// SLICE(it takes negative value) // substr(it doesn't take negative value)
// var str = "APPLE,BANANA,PINEAPLE"
// var newStr = str.slice(0,5)
// console.log(newStr)
// let myTweet = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ipsa, dignissimos quaerat unde porro assumenda provident exercitationem quisquam sequi ad ipsam delectus mollitia, nulla natus distinctio nemo non! Non distinctio quisquam facilis amet? Quia, nisi recusandae dolorem perferendis itaque eligendi, fuga veniam accusamus officia cupiditate numquam veritatis repudiandae saepe soluta impedit? Mollitia quaerat magni similique numquam, amet ullam animi veritatis maxime dignissimos facilis doloribus a possimus necessitatibus recusandae deserunt earum maiores libero quidem placeat iste. Id hic laudantium libero tempora nam culpa vel cumque quam iusto nemo, mollitia ad sapiente quisquam sed quis dicta soluta harum, assumenda reprehenderit. Minima expedita deleniti tenetur error aliquam ab omnis magni. Harum ut velit praesentium commodi laborum itaque ipsam ratione tenetur voluptatem neque accusamus cupiditate quae exercitationem."
// let myActualTweet = myTweet.slice(0,280)
// console.log(myTweet.length)

// Replace
// let MyBioData = "my name is naif"
// let repData = MyBioData.replace("naif","Naif")
// console.log(repData)

// UPPERCASE/LOWERCASE
// var Fname = "Naif Ibrahim"
// console.log(Fname.toUpperCase())
// console.log(Fname.toLowerCase())

// Trim()
// var Fname = "   Naif Ibrahim   "
// console.log(Fname.trim())

// Split /converting into array
// var txt = "a,b,c,d,e"
// console.log(txt.split(",")) // slpit on commas

// Date & Time 
// var CurrDate_Time = new Date
// console.log(CurrDate_Time)
// console.log(CurrDate_Time.toLocaleString())
// console.log(CurrDate_Time.toString())
// console.log(Date.now())
// var d = new Date (1695311417291)
// console.log(d.toLocaleString())

// new Date().toLocaleDateString(); /Give date only
// new Date().toLocaleTimeStringString(); /give time only
// new Date().toLocaleString(); /give date & time both

// MATH OBJECTS
// console.log(Math.PI) /Give PI value

// let num = 10.500
// console.log(Math.round(num)) /gives round number to its nearest integer

// console.log(Math.pow(2,3)) gives power value 2x2x2
// console.log(2**3) /gives power value 2x2x2

// console.log(Math.sqrt(25)) / ----------------
// console.log(Math.sqrt(81)) / GIVES SQUAREROOT 
// console.log(Math.sqrt(65)) / ----------------

// console.log(Math.abs(-45))  --------------------
// console.log(Math.abs(-108)) GIVES POSITIVE VALUE
// console.log(Math.abs(-100)) --------------------

// console.log(Math.ceil(4.01)) /INCREASE .VALUE BY 1
// console.log(Math.floor(4.7)) /REMOVES THE .VALUE
// console.log(Math.min(4,5,6,8,10,-200)) /GIVES MINIMUM VALUE
// console.log(Math.max(4,5,6,8,10,-200)) /GIVES MAXIMUM VALUE
// console.log(Math.floor(Math.random()*10)) /GIVE RANDOM NUMBERS LESS THAN 10 
// console.log(Math.trunc(4.7))----------------------   
// console.log(Math.trunc(-5.8)) /GIVES INTEGER PART OF A NUMBER
// console.log(Math.trunc(-10.11))-------------------

// OBJECTS And THIS
// let bioData = {
//     myName : {
//         Name : "Naif",
//         fatherName : "Ibrahim",
//      },
//      myAge : 20,
//      myData (){
//         console.log(`my name is ${this.myName.Name} and my age is ${this.myAge}`);
//      }
// }
// bioData.myData();

// ARRAY DESTRUCTURING
// let myName = ['Naif','Ibrahim',20]
// let [myFirstName,myFatherName,Age] = myName
// console.log(myFirstName+myFatherName+Age)

// OBJECT DESTRUCTURING
// let bioData = {
//          myFirstName : "Naif",
//          myFatherName : "Ibrahim",
//          Age : 20,
//           }
//     let {myFirstName,myFatherName,Age} = bioData
//     console.log(myFirstName+myFatherName+Age)

// ADDING DYNAMIC VALUES IN OBJECTS
// let myName = "NAIF";
// const myBioData = {
//    [myName] : "Hello! How are you?",
//    [15+5] : "is my age"
// }
// console.log(myBioData)

// let myName = "NAIF";
// let myAge = 20
// const myBioData = {
//    myName,
//    myAge
// }
// console.log(myBioData)

// REST OPERATOR
// let colours = ["red","green","yellow",'pink']
// let myFavColours = [...colours,"black","blue"]
// console.log(myFavColours)

// // INCLUDES
// const isPresent = colours.includes("red")
// console.log(isPresent)

// EXPONENTIAL OPERATOR **
// console.log(2**4)

// PADDING START/PADDING END
// let Myname = "Naif".padStart(5)
// console.log(Myname)
// let Myname = "Naif".padEnd(5)
// console.log(Myname)

// OBJECT.VALUES/OBJECT.ENTRIES
// const person = {
//     name : "naif",
//     age : 20,
// }
// console.log(Object.values(person))
// console.log(Object.entries(person))

// REST OPERATORS IN OBJECTS
// let person = {
//     name : "naif",
//     age : 20,
//     degree : "BA"
// }
// let sPerson = {...person}
// console.log(person)
// console.log(sPerson)


// FLAT METHOD
// const arr = [['zone1', 'zone2'],
//             ['zone3', 'zone4'],
//             ['zone5', 'zone6'],
//             ['zone7', 'zone8'],
//             ['zone9', ['zone10','zone11']]
//         ];
// console.log(arr.flat())

// const arr2 = [['zone1', 'zone2'],
//             ['zone3', 'zone4'],
//             ['zone5', 'zone6'],
//             ['zone7', 'zone8'],
//             ['zone9', ['zone10','zone11']]
//         ];
// console.log(arr2.flat(Infinity))

// FROM ENTRIES  *RETURNS OBJECT*
// const person = {
//     name : "naif",
//     age : 20,
// }
// const objArr = (Object.entries(person))
// console.log(Object.fromEntries(objArr))

// BIGINT
// let lastNum = Number.MAX_SAFE_INTEGER
// console.log(lastNum)
// const newNum = 9007199254740991n + 12n
// console.log(newNum)
// console.log(typeof newNum)

// STRICT MODE
// x = 3.14
// console.log(x)
// "use strict";
// let x = 3.14
// console.log(x)

// HIGH ORDER *function which takes a function as a argument is HIGH ORDER FUNCTION*
// CALL BACK FUNCTION *function who is passed as an argument is CALL BACK FUNCTION*
// const add = (a,b) => {
//     return a+b;
// }
// const sub = (a,b) => {
//     return Math.abs(a-b);
// }
// const mult = (a,b) => {
//     return a*b;
// }
// const calculator = (num1,num2,operator) => {
//     return operator(num1,num2)
// }
// calculator(5,2,add)
// console.log(calculator(5,2,add))
// console.log(calculator(5,2,sub))
// console.log(calculator(5,2,mult))

// LEXICAL SCOPE
// let a = "Hello Guys" 
// const first = () => {
//     let b = "How are you?"

//   const second = () => {
//       let  c = "I am fine.";
//       console.log(a+b+c) 
// }
// second()
// console.log(a+b+c)
// }
// first()


// CLOSURE
// const outerFun = (a) => {
//     let b = 10
//     const innerFuc = () => {
//         let sum = a+b
//         console.log(`the sun of two numbers is ${sum}`);
//     }
//     innerFuc();
// }
// outerFun(5);

// ASYNCHRONOUS JS PROG
// const fun2 = () => {
//     setTimeout(() =>{
//         console.log('function 2 is called')
//     },2000)}
// const fun1 = () => {
//     console.log('func1tion 1 is called')
//     fun2();
//     console.log('function 1 is called again')
// }
// fun1()

// SYNCHRONOUS JS PROG
// const fun2 = () => { 
//         console.log('function 2 is called')
//     }
// const fun1 = () => {
//     console.log('func1tion 1 is called')
//     fun2();
//     console.log('function 1 is called again')
// }
// fun1()

// FUNCTION CURRYING
// function sum (num1) {
//      return function (num2) {
//      return function (num3) {
//         console.log(num1+num2+num3);
//     }
//   }
// }
// sum(5)(3)(8)
// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);
// sum(5)(3)(8)

// JSON.stringify **converting object into string
var my_object = {
  key1 : 'some text',
  key2 : 'True',
  key3 : 5,
};
var object_as_string = JSON.stringify(my_object);
console.log(object_as_string);
console.log(typeof(object_as_string))

// JSON.parse **converting string into object
var object_as_string_as_object = JSON.parse(object_as_string);
console.log(object_as_string_as_object)
console.log(typeof(object_as_string_as_object))