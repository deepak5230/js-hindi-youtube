const obj = { 1: "a", 2: "b", 3: "c"}

const obj2 = { 4: "d", 5: "e", 6: "f"}


// this is spreading method to imerge a object
//const obj3 = {...obj,...obj2}
//console.log(obj3);
//const obj3= { obj, obj2}

const obj3= object.assign({} , obj,obj2)
console.log(obj3);

const course = {

   coursename: "javascript",
    price: "999",
    courseInstructor: "deepak",
}

//course.courseInstructor// destructure the value  const{courseInstructor: Instructor}= course
const {courseInstructor: Instructor}= course

console.log(Instructor);






