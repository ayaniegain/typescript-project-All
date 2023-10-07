// let a:string="ayan"
// let surname: string| number;
// surname ='345'


// type Username = (n:number, m: number) =>number;

// const func: Username =(n,m)=>{
//     return n + m;
// };
// let n=6
// let m=7
// func(n,m)

// -----------ARRAY

// const arr: Array<string|number>=[12,34,44]

// console.log(arr);

// -------------- OBJECT

type funcType=()=>void

type Objval={
    name:string,
    age:number,
    gender?:boolean,
    func:funcType
}


let obj:Objval={
    name:"ayan",
    age:23,
    gender:true,
    func:()=>{}
}

console.log(obj);