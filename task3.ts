class Person {
    public name;
    public age;
    public gender;
    
    constructor(name: string, age: number, gender: boolean){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
};

class Student extends Person{
    public baho;

    constructor(name: string, age: number, gender: boolean, baho: number){
        super(name, age, gender);
        this.baho = baho;
    }

    about(){
        return `Name: ${this.name}\nAge: ${this.age}\nGender: ${this.gender}\nBaho: ${this.baho}`;
    }
};

const student: Student = new Student('Xasan', 17, true, 5);
console.log(student.about());