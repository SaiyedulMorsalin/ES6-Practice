class Student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = "Kolimunnessa School";
    }

}
const student1 = new Student(12,"suvo");
const student2 = new Student(22,"mahia");
const student3 = new Student(29, "Bappi")

console.log(student1.name,student2.name,student3);