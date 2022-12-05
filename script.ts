
// variables 
export {}

// let a:string = "10";
// let b:number = 25;
// let c:boolean = true;

// console.log(a);
// console.log(b);
// console.log(c);


// array 
// // let arr:number[] = [100,200]
// let arr:string[] = ["mohan","sohan", "ram"];
// // arr.push("two");
// console.log(arr);


// objects in typescript 

// let obj = {
//     name:"Ram",
//     age:42,
//     job:true
// }

// using aliases 
// type objs = {
//     name:string,
//     age:number,
//     job:boolean
// }

// let obj:objs= {
//     // name:52,
//     name:"mohan",
//     age:22,
//     job:false
// }
// let fun = (ob:objs) => {
//     console.log(ob.name);
// }
// fun({name:"ram",age:52,job:true})
// console.log(obj.name);

// using interfaces 
// interface userTyped {
//     name:string,
//     salary?:number,
//     age:number,
//     job:any
// }

// const userDetail = (user:userTyped) => {
//    console.log(user.salary);
// }
// // userDetail({name:"mohaon",salary:45200,age:54,job:"software engineer"})
// userDetail({name:"mohaon",age:54,job:"it engineer"})


// UNION TYPES 
// const printId = (id:number | string) => {
//     // console.log(id);
//     // console.log(id.toUpperCase());
//     if(id === "string ") {
//         console.log(id.toUpperCase());
//     }
//     else {
//         console.log(id);
//     }
// }
// // printId("202");
// // printId({myid:512}) // error
// // printId("a")
// printId(20)

// const arrayunion = (arrTyped:string[] | string) => {
//         if(Array.isArray(arrTyped)) {
//           console.log(arrTyped.join(" namaste"));
//         }
//         else {
//            console.log(arrTyped);
//         }
// }
// arrayunion(["hello","typescript "])
// // arrayunion("typescript")

// type assertion 

// let heading = document.getElementById("#container") as HTMLCanvasElement;
// let heading = document.getElementById("#container") as HTMLCanvasElement;

// let heading = <HTMLCanvasElement>document.getElementById("#container");

// class in typescript 

// class App {
//    name:string = "anil";
//    constructor (n:string)  {
//          this.name = n;
//    }
//    getName ():string {
//     //   console.log(this.name);
//     return "hello" + this.name
//     }
// }
// let ob = new App("mohan");
// // ob.getName();
// let x = ob.getName();
// console.log(x);

// Inheritance in typescript 

// class parent {
//     name:string;
//     setName (name):void {
//         this.name = name
//     }
// }

// class  child extends parent{
//     getName():string {
//         return this.name
//     }
// }
// let obj = new child();
// obj.setName("Anil kapoor...");
// console.log(obj.getName());

// NAMESPACE IN TYPESCRIPT 
