
/*const user = {

    username: "deepak",
    price: 344,

    welcomeMessage: function(){
     console.log('${this.username}, and the');


    }
}
user.welcomeMessage();*/

/*function chai(){

    let username="hitesh"

console.log(this)
}

chai()*/

/*const chai= function(){

    let username= "deepak"
    console.log(this.username);

}

const chai1 = ()=>{
    let Username="golu"
    console.log(this.username);

}

const golu  =(num1,num2)=>{

    return( num1+ num2)


}*/

//suppose aap apne website pe user ko registered kr rhe h

const user = {
    username: "deepak",// name h 
    price: 199, //paise le rhe the login krne bole 
//   jo v user iss function ke uper aae usi kok msg paass kru
    welcomeMessage:  function(){
        //console.log('${this.username}, welcome to website');// this keyword making current context
        console.log(this)//current context means iss scope ke variable ko this 
    }

}
//browser ke ander jo global object h woh window object h
//user.welcomeMessage()
//user.username ="sam"
//user.welcomeMessage()
//console.log(this)// function ke ander this nai used 
///++++++++++++++++++++++++++++++++
//function chai(){
  //   let username = "deepak"
    //console.log(this)

//}

//chai()
 
/*const chai = function(){

    let username= "deepak"
     console.log( this.username)
}

chai()*/

/*const chai = ()=>{

    let username= "deepak"
     console.log( this.username)*/


     /*const users= {
        username:"deepak",
        price: 344,

        welcomeMssage: function(){

            console.log('${this.username} welcome to the orice')
        }

    
    }
    user()*/

    //pure arrow function
    /*const addtwo=(num1,num2)=>{ variabke ander hold krdete hai

        return(num1+num2)



    }
    console.log(addtwo(3, 4))*/

    //++++++

    //implici return = return keyword likhne ka jrurt nsi h
    const addtwo =(num1,num2)=>// curly braces use hua toh return key use krna prega 

        (num1 +num2) //parenthesis me likhna prega return kewyword nai use krna prega 
    
   console .log(addtwo(3,4))
//explicit use return keyword
    

