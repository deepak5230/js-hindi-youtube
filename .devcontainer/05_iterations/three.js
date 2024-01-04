//for of loop, const iterator of object for( variable declare aur kispe lagana hai) for( const num of arr)

//["", "",""]
//[{},{},{}]

const arr =[1,2,3,4,5]

for(const num of arr){

    console.log(num);
}
const greetings= "hello world";

for( const greet of greetings){

    console.log(`each value is ${greet}`);
}

//maps== just like an array and iretate// map is an object hold key value pair map(key, value) and also map print unique value
// const map = new Map()


const map = new Map()
map.set('IN', "India")
map.set('Usa',"united states")
 console.log(map);
// destructure in array for ( const [key, value], of map)
 for(const key of map){

    console.log(key);
 }

 



