# Type Guard #
![typeGuard](https://i.ibb.co.com/7NHDYKq/TYPE-GUARD.png)

### Why are Type Guards Necessary? ###
We use Type Guard to ensure time safety at runtime. In javascript we are working with uncertain types. To avoid this problem we use Type Guards in typescript to refine types in specific code paths and safely access properties , methods or behaviors. This is very crucial for enterprise level application beacuse it improves code readability.

### Various Types of Type Guards and Their Use Cases ###

1. **typeof**:
<br>
we use this for primitive types(number,string,boolean)

```
function printValue(value: number | string) {
  if (typeof value === "string") {
    console.log("String value:", value.toUpperCase());
  } else {
    console.log("Number value:", value.toFixed(2));
  }
}
```


2. **intype**:
<br>
 we use this to check if a certain property exists or not in a object

```
type Car = { drive: () => void };
type Boat = { sail: () => void };

function operate(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}

```


3. we can also use *custom* type guards:
<br>
```
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}

```
here *isfish* is custom type guard
