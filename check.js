var Car = /** @class */ (function () {
    function Car(m, mo, y) {
        this.make = m;
        this.model = mo;
        this.year = y;
    }
    Car.prototype.start = function () {
        console.log("Car Engine started!");
    };
    return Car;
}());
var car1 = new Car("karhba", "hanefjvnij", 2300);
car1.start(); // Output: "Car Engine started!"
