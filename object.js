let studentObj = {
    name:"sindhu",
    age:22,
    number:9090909090,
    email:"vankudothsindhu@gmail.com",
    address:{
        pincode: 508213,
        city:"suryapet"
    },
    supplies:['Maths', 'Java', 'Chemistry']
}
//using spread operator
let studentObj1 = {...studentObj}
studentObj1.age = 21       
studentObj1.address.city = "Hyderabad"     
console.log(studentObj, studentObj1)

//using object.assign method
let studentObj2 = {name:"veeranna", email:"veeranna@gmail.com"}
let updatedObj = Object.assign(studentObj1, studentObj2)
console.log(updatedObj, studentObj1)

let employee = {
    name:"jhansi", 
    id:201,
    company_details:{
        company_name:"kleetechnologies",
        branch:"Ramantapur"
    }
}
let updatedEmployee = JSON.parse(JSON.stringify(employee))
updatedEmployee.company_details.branch = "Gachibowli"
console.log(employee, updatedEmployee)


//Spread in Arrays
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr = [...arr1, ...arr2]
console.log(arr)

//Spread in objects
let obj1 = {firstName:"datthu", age:21}
let obj2 = {lastName:"veeranna", number:9494994949}
let obj = {...obj1, ...obj2}
console.log(obj)

function sum(...nums){
    let sum = nums.reduce((a, b) =>{return a+b}, 0)
    return sum
}
console.log(sum(10,9,8,7,6,5,4,3,2,1))
let friends =["jhanu", "sindhu", "veeranna", "sneha", "datthu"]
let [first, second, ...rest] = friends
console.log(first,second,rest)