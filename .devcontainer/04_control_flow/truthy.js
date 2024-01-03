const userEmail =[]

if(userEmail){

    console.log("gotuseremail")


}
else{
    console.log("dont have user email")
}

//false values
//false,0,-0,BigInt 0n, "",null,undefine,nan
//truthyvalues
// "0",'false'," ",[],
//object empty aae toh check krna hai
 const emptyObj = {}
    if(object.keys(emptyObj).length===0){

        console.log(objectisempty);
    }
 //&& == all condition are true
 // or|| = only one condition have true

 //Nullish coalescing operator(??): null undefined


 let val1;
 val1= 5 ?? 10

 console.log(val1);
 //terniary operator

 condition ? true: false
 const iceTeaprice= 100
 iceTeaprice>= 80? console.log("lee than 80"): console.log("morethan 80")

