// let n = 5;
// let string = "";
// for(i=0;i<5;i++){
//     for(j=0;j<5;j++){
//         if(i==0 || i== n-1){
//             string += "*";
//         }
//         else{
//             if(j==0 || j== n-1){
//                 (string += "*");
//             }
//             else{
//                 (string += " ")
//             }
//         }
//     }
//     string += "\n";
// }
// console.log(string);

// Finding Simple Interest
// let p =1;
// let r = 1;
// let t = 1;
// let SI = (p*r*t)/100;
// console.log("Simple interest is:"+ SI)

// Finding gross salary 

// let basic = 10000;
// let grade = 'A';

// function f1(basic,grade){
//     let c;
//     let hra,da,pf;

//     hra = 0.2*basic;
//     da = 0.5*basic;
//     pf = 0.11*basic;

//     if(grade == 'A'){
//         c = 1700.0;
//     }
//     else{
//         if(grade == 'B'){
//             c = 1500.0;
//         }
//         else{
//             c = 1300.0;
//         }
//     }
//     let gross = Math.round(basic+hra+da+c-pf);
//     return gross;
// }

// console.log(f1(basic,grade));

// swapping two integer numbers

// let x = 10;
// let y = 20;
//  x = x+y;
//  y = x-y;
//  x = x-y;
// console.log(x,y)

// find out the ascii value of giving number
// let a = 'A';
// let b = a.charCodeAt();
// console.log(b)

// find out the last digit of given number

// let a = 930151;
// let b = a%10;
// console.log(b);

// calculate the compound interest  => formula p * (math.pow(1 + (r/n)),(n*t))

// const principal = 2000;
// const time = 5;
// const rate = .08;
// const n = 12;

// function ci(p,t,r,n){
//     const amount = p * (Math.pow(1+(r/n)),(n*t))
//     const interest = amount -p;
//     return interest;
// }

// console.log(ci(principal,time,rate,n))

// square of givn number

// let num = Math.pow(2,2)
// console.log(num)

// operaters 

// console.log("<br> 5/2 :"+ (5/2));
// console.log(5%2);
// console.log(-5%2);
// console.log(5%-2);
// console.log(5/0);
// console.log(20+null);
// console.log(20 + undefined);
// console.log(20 + true);
// console.log(20 + false);
// console.log(null + undefined);
// console.log(null == null);
// console.log(null === null);
// console.log(NaN == NaN);
// console.log(NaN === NaN)
// console.log(undefined == undefined);
// console.log(undefined === undefined);
// console.log(true == 1);
// console.log(false == 0);

// const item = {
//      dog: "animal",
//     banana: "fruit",
//     washing: "cloth",
// }
// item["Deepraj"] = "boy"
// console.log(item)

// let a = 2;
// let b = 3;
// console.log("a+b :"+ (a+b))
// console.log("a-b :"+ (a-b))
// console.log("a/b :"+ (a/b))
// console.log("a**b :"+ (a**b))
// console.log("a%b :"+ (a%b))
// // console.log("a++:"+ (a++))
// console.log("++a :"+ (++a))

// let x = 10;
// if(x<0){
//     console.log("This is an invalid age");
// }
// else if(x>9 && x<18){
//     console.log("you can not drive you can think to drive after 18");
// }
// else if(x>18){
//     console.log("you can eligibe to drive");
// }
// else{
//     console.log("you can not eligible to drive");
// }
 
// const a = "Default";
// switch(a){
//     case "Apple":
//             console.log("This is a apple");
//             break;

//     case "Banana":
//             console.log("This is a banana");
//             break;

//     case "Default":
//             console.log("This is an default value");
//             break;
// }

// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// (a>b)? console.log("a is greater then b") : (a>c)? console.log("a is greater then c"): (a>d)? console.log("a is greater then d"): console.log("d is greater then a")


// const a = prompt("Enter the number");
// console.log(a);
// b = a*1;
// console.log(typeof (b));

// let  sum = 0
// let  a = prompt("Enter the number")
// a = Number.parseInt(a)
// for(let i=0; i<a; i++)
// {
//     sum += (i+1)
// }
// console.log("sum of first " + n + " nature numbers is "+ sum)

// const obj = {
//     Deepraj: 87,
//     Yuvraj: 90,
//     Neeraj: 77,
//     Mohit: 68
// }

// for(let a in obj){
//     console.log("Marks of "+ a +" is "+ obj[a]);
// }

// let a = 10;
// let i = 10;
//  do {
//     console.log(i);
//     i++;
// }while(i<a);


// const sum = (x,y)=>{
//     console.log("This code is done");
//     return x+y;
// }
// let a = 5;
// let b = 6;
// console.log("sum of a and b is :"+ sum(a,b))

// const marks = {
//     Deepraj: 89,
//     Yuvraj: 78,
//     Neeraj: 67
// }

// // for(let i=0; i<Object.keys(marks).length; i++){
// //     console.log("The marks of "+ Object.keys(marks)[i]+" is "+ marks[Object.keys(marks)[i]])
// // }

// for( keys in marks){
//     console.log("The marks of "+ keys + " is "+marks[keys])
// }

// let cn = 3;
// let i;
// while(i!=cn)
// {
//     i = prompt("Enter the correct number");
// }

// console.log("You have entered correct number")

// let s = "deep\"raj";
// console.log(s)

// let a = "Yuvraj";
// let b = "Deepraj";
// console.log(`${a} is a friend of ${b}`)

// let friend = "Deepraj";
// let name = "Yuvraj";
// console.log(friend.concat("is a friend of", name))

// let friend = "har\""
// let word = "ar"
// console.log(friend)
// console.log(friend.length)
// console.log(friend.includes(word))

// let str = "Deepraj have a 2000Rs";
// let amount = (str.slice(15));
// console.log(amount)

// let arr = [22,44,55,33,556,66];
// for(let i=0; i<=arr.length; i++)
// {
//     console.log(arr[i])
// }

// let a = arr.toString();
// console.log(a, typeof (a))

// let b = arr.join("_");
// console.log(b)

// let c = arr.pop();
// console.log(c, typeof (c));

// let d = arr.push(32)
// console.log(arr, typeof (d))

// const compair = (a,b) =>{
//     return b-a;
//  }
//    let a = [3,25,4,3,54,3];

// console.log(a,a.length)
// delete a[0];
// console.log(a,a.length)
// console.log(a.concat(b))

// let c = a.sort(compair)
// console.log(a)

// let d = a.splice(1,2,4444,4444)
// console.log(a)

// let e = a.slice(1,3)
// console.log(e)

// let a = [1,2,3,4,5,6];
// a.forEach((element)=>{
//     console.log(element*element)
// })

// for(let i of a){
//     console.log(i);
// }

// for(let i in a){
//     console.log(a[i])
// }

// let num = [1,2,3,4,5,6];
// let a = num.map((value)=>{
//     console.log(value);
//     return value+1;
// })
// console.log(a);

// let num2 = [33,2,255,4,3,22];
// let b = num2.filter((c)=>{
//     return c<10;
// })
// console.log(b)

// let num3 = [1,2,3,4,5];
// let d = num3.reduce((h1 , h2)=>{
//     return h1 + h2;
// })
// console.log(d)

//Bitwise operator 

// let x = 13 ^ 10
// console.log("Result of x is :"+ x)

// let y = 3;
// (y&1)==0 ? console.log("Even"): console.log("Odd")

// let x = 3;
// let y = 4;
// x = x*y;
// y = x/y;
// x = x/y;

// console.log("value of x and y is: "+ x,y)

// let arr = [1,2,4,4,5,6,7];
// let a = prompt("Enter the number");
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// let arr = [1,2,3,4,5,6,6]
// let a;
// do{
//     a = prompt("Enter the number");
//     a = Number.parseInt(a);
//     arr.push(a);
// }while(a!=0);
// console.log(arr)

// let arr = [1,2,3,4,5,6,6,44,33,66,55];
// let n = arr.filter((x)=>{
//     return x>10
// })
// console.log(n)


// let arr = [1,2,3,4,5,6,6];
// let b = arr.map((x)=>{
//     return x*x;
// })
// console.log(b)

// let arr = [1,2,3,4,5,6,6];
// let b = arr.reduce((x1,x2)=>{
//     return x1*x2;
// })
// console.log(b)

// console.time("obj")
// obj = { a:1 , b:2 , c:3 }
// console.table(obj)
// console.time("obj")


// let runAgain = true;
// while(runAgain){
//     let a = prompt("Enter the number");
//     a = Number.parseInt(a);
//     if(a>18)
// {

//     alert("This person age is above 18 and he can drive")
// }
// else
// {
//     alert("This person age is below 18 and he can not drive")
// }
// runAgain = confirm("Do you want to run again")

// }

// let color = prompt("Enter the backgroundcolor")
// document.body.style.backgroundcolor = color

// let arr = Array.from(document.body.childNodes);
// console.log(arr);

// let a = document.body.firstChild
// console.log(a.firstChild.nextSibling)


// const changebgred = ()=>{
//     document.body.firstElementChild.style.backgroundColor = "red";
// }

// changebgred()

// let a = document.body.firstElementChild.firstElementChild
// console.log(a.rows)
// console.log(a.tHead)
// console.log(a.rows[0].rowIndex)


// let ctitle = document.getElementsByClassName("card-title")[0];
// ctitle.style.color = "red"

// let ctitles = document.querySelectorAll(".card-title");
// ctitles[0].style.color = "blue"
// ctitles[1].style.color = "red"
// ctitles[2].style.color = "green"
// console.log(ctitles)

// document.querySelector(".this").style.color = "black"

// let id1 = document.getElementById("id1");
// let sp1 = document.getElementById("sp1")
// console.log(id1)
// console.log(id1.matches(".box"))
// console.log(sp1.closest("#sp1"))

// Array.from(document.getElementsByTagName("li")).forEach((element)=>{
//     element.style.color = "red";
// })

// let user = prompt("Enter the S,W and G")
// let cpuI = Math.floor(Math.random()*3);
// let cpu = ["S","W","G"][cpuI]

// const match = (user,cpu)=>{
//     if(cpu === user){
//         return "Nobody win"
//     }
//     else if(cpu === "S" && user === "W"){
//         return "cpu"
//     }
//     else if(cpu === "S" && user === "G"){
//         return "user"
//     }
//     else if(cpu === "G" && user === "W"){
//         return "user"
//     }
//     else if(cpu === "G" && user === "S"){
//         return "cpu"
//     }
//     else if(cpu === "W" && user === "G"){
//         return "user"
//     }
//     else if(cpu === "W" && user === "S"){
//         return "cpu"
//     }
// }


// let Result = match(user,cpu)
// document.write(`CPU:${cpu} and USER:${user}\nThe winner is: ${Result}`)
//  id.insertAdjacentHTML('beforebegin','This is my bag')
//  id.insertAdjacentHTML('beforeend','This is my book')
//  id.insertAdjacentHTML('afterbegin','This is my pick')
//  id.insertAdjacentHTML('afterend','This is my photo')

// let arr = [[10,20,30],
//            [40,50,60],
//            [70,80,90],
//         ]
// document.write(arr.length)

// function loadScript(src){
//     var script = document.createElement('script')
//     script.src= src;
//     script.onload = function(){
//       console.log("SRC :"+ src)
//     }
//     document.body.appendChild(script);
//    }
  
//     loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js")

<script>
  
let a = {
  name:"Deepraj",
  language:"javascript",
}
console.log(a)
</script>