class Parent{
    constructor(){
        this.fatherName = "Schwerznegger"
    }
}




class Child extends Parent{
    constructor(name){
        super();
        this.name = name;

    }
    getfullName(){
        return this.name + " " +this.fatherName;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Khusbu");

console.log(baby.getfullName());
console.log(baby2.getfullName());