"use strict";
// --------FUNCTION
// type functype=(n:number,m:number)=>number
// let myfunc:functype=(n:number,m:number)=> {
//     return m+n
// }
// let res=myfunc(10,20)
// console.log(res);
//rest opprator-------
// type restType= (...m:number[])=>number[];
// let restFunc:restType=(...m)=>{
//     return m
// }
// let res=restFunc(12,34,55,667,22)
// console.log(res);
// -------function with Objects
// type myFuncType=(product:productType)=>{}
// type productType={
//     name:string,
//     price:number,
//     quantity:number,
//     readonly id:number
// }
// let product:productType={
//     name:'school bag',
//     price:1200,
//     quantity:12,
//     id:112234545
// }
// let  myfuncObj:myFuncType=(product)=> {
//     return product
// }
// let res=myfuncObj(product)
// console.log(res);
////////alliacis---------
// type theameMode= 'light' | 'dark';
// let mode:theameMode= 'dark'
