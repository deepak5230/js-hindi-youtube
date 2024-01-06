//forEach loop discussed

/*const coding= ["js","html","css","javascript","css"]

const values = coding.forEach((item)=>{

    console.log(item);
    return item


})

console.log(values);*/
//filer method return the values but for each loop didnot return the values
//filter use krte h
// scope open krte hai toh return keyword use krna prega h {  num> 4} 
// scope open nai krte h to directly likhdijie num> 4
//const myNum= [1,2,3,4,5,6,7,8,9,10];

//const newnums= myNum.filter((num)=>{  return num>4



//})

//console.log(newnums)
// yeh for each me use krna h toh kais ekrenge

/*const newNums=[]

myNum.forEach((num)=>{

    if(num>4){

        newNums.push(num)
    }
})

console.log(newNums)*/

const myuser= [

    {

        houseno: 567,
        year: 2017,
        address: 'patna',

    },
    {houseno: 567,
        year: 2017,
        address: 'hajipur'},

    
       { houseno: 999,
        year: 2018,
        address: 'fatua'},

    
    {houseno: 111,
    year: 2019,
    address: 'kjj'},
];

    const userbouse = myuser.filter((hou)=>{ return hou.houseno===999
        


    })
    console.log(userbouse);




    







