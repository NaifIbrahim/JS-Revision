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






