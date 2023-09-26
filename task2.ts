class Person {
    public name;
    public age;
    public gender;
    
    constructor(name: string, age: number, gender: boolean){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    about(){
        return `Name: ${this.name}\nAge: ${this.age}\nGender: ${this.gender}`;
    }
};

const person: Person = new Person('Xasan', 17, true);
console.log(person.about());