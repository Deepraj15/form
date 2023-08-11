
let a = {
    name:"Deepraj",
    language:"javascript",
  }
  console.log(a)

let p  = {
    run(){
        alert("run")
    }
}

p.__proto__ = {
    name2: "Deepraj"
}
a.__proto__ = p
a.run()
console.log(a.name2)