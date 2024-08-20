class User {
    name : string;
    public age: number;
    private city : string = "";

    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }

    // getter
    get getCity() : string {
        return this.city;
    }

    // setter
    set setCity(city : string){
        this.city = city;
    }
}

const alex = new User("alex", 18);

alex.setCity = "noida";

console.log(alex.getCity);