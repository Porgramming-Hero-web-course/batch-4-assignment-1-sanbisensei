{
    type Circle = {
        shape: "circle";
        radius: number;
    }
    type Rectangle ={
        shape: "rectangle";
        width: number;
        height: number;
    }
    
    type UniqueShape= 
    Circle | Rectangle;


    function calculateShapeArea(shape: UniqueShape): number {
        if (shape.shape == 'circle') {
            let area =3.1416 * shape.radius;


            return area;
        }
        else{
            let areaRec = shape.width * shape.height;

        return areaRec;
        }
    }


const circle: Circle = {shape: "circle", radius:6};
console.log(calculateShapeArea(circle))
const rectangle: Rectangle = {shape: "rectangle", width: 5, height: 10};
console.log(calculateShapeArea(rectangle))

}