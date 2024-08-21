abstract class Person {
    public _name : string;
    public _age : number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    name() : void{
        console.log(this._name);
    }
    age() : void {
        console.log(this._age);
    }

    abstract designation() : void;
}

class Employee<T> extends Person {
    _empCode : number;
    _designation : string = 'no designation assigned yet.';

    constructor(name: string, age: number, empCode : number) {
        super(name, age);
        this._empCode = empCode;
    }

    set setDesignation(designation : string){
        this._designation = designation;
    }

    empCode() : void {
        console.log(this._empCode);
    }

    designation(): void {
        console.log(this._designation);
    }

    static create<T>(name: string, age: number, empCode: number) : Employee<T> {
        return new Employee(name, age, empCode);
    }
}

const emp = Employee.create("alex", 18, 1234);
