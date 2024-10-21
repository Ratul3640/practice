const addCourseToStudent=<T extends {id:number,name:string, email:string}>(student:T)=>{
    const course = "Next Level Web Development";
    return {
        ...student,
        course
    }
}

const student1 = addCourseToStudent({ id:506034,name: "humayun" ,email:"abc@gamil.com",role:"user"});
console.log(student1);

const student2=addCourseToStudent({
    gender:"male"
})
console.log(student2);