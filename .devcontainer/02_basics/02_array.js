const marvel_heroes= ["ironman", "spiderman","thor"]

const my_heroes= ["batman", "superman","flash"]

//marvel_heroes.push(my_heroes);
//console.log (marvel_heroes);// push method return eexisting array
//and concat return new aararry element merge array

//spread()



//const all_heroes= marvel_heroes.concat(my_heroes);
//console.log(all_heroes);
// one by one lement spread hpgae

//const all_new_heroes = [...marvel_heroes,...my_heroes]

const new_another_array=[1,2,3,[4,5,6,7],8,9,10.[4,5,6]]

const new_array= new_another_array.flat(infinity)

console.log(new_array)