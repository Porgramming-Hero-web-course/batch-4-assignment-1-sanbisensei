{
    class Car{
       make:String;
       model:string;
       year:number;
       constructor(make:string, model:string,year:number){
           this.make = make;
           this.model = model;
           this.year = year;
       }
   
       getCarAge():number{
   
           const current = new Date().getFullYear();
           // ami dynamic current year paisi ei function use kore(2024)
           
           let carAge = current - this.year;
           // then ami 2024 theke 2010 minus korsi :)
           return carAge;
   
       }
   
    }
   
   const car = new Car("Honda", "Civic", 2010);
   console.log(car.getCarAge());
   
   // output: 14 
   // :)
    
   
   
   }