export function showModel1() {
    console.log('it`s model 1');
}

export class NewClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        console.log(`${this.name} is ${this.age}`);
    }
}