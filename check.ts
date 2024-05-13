interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void; // Correct method declaration syntax
}

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(m: string, mo: string, y: number) {
        this.make = m;
        this.model = mo;
        this.year = y;
    }
    
    start(): void {
        console.log("Car Engine started!");
    }
}

let car1 = new Car("karhba", "hanefjvnij", 2300);
car1.start(); // Output: "Car Engine started!"
