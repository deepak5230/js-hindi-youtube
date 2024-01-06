

const myNumbers = [ 1,2,3,4,5,6,7,8,9,10]

// sbke ander 10 add krna hai, and automatically returb krtta hai

//const newnums=  myNumbers.map((num)=>{ return num+10

//})
const newNums= myNumbers.map((num)=> {return num*10}).map((num)=>{ return num+1
}).filter((num)=>{

   return num>=40
})
console.log(newNums);
//chaining method === two or more method used one time one map method use hoga jo uskamehtod use hoga other method me uska result
//
///////     