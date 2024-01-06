// reduce .js
/*const myNums= [1,2,3]
// reduce methode means find accumulator and current value
//reduce start, accumulator and current value// accumulator ko jov , ke baad dete ho woh aajata hai 
const myTotal = myNums.reduce((acc, currval)=>{

    console.log(`acc:${acc} and currval:${currval}`);
    return acc +currval


},0)*/
//console.log(myTotal);

const shopingcart=[
    {
        itemName: "course js",
        price: 299,
        
    },
    {
        itemName: "python js",
        price: 3333,

    },
    {
        itemName: "mobile js",
        price: 299,

    },
    {
        itemName: "data js",
        price: 1299,

    },
]
    //aapne courses kharid lie hai ab aapko ek functioality introduce krni haishoping cart ke ander jitne prices h add krdo


const pricetopay=shopingcart.reduce((acc,item)=>{   return acc+item.price, 0


})
console.log(pricetopay);

    




