  'user strict';
//class: template
//object: intance of a class 

class Person{
    //생성자
    constructor(name, age){ 
        //feilds
        this.name=name;
        this.age=age;
    }
    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const sunjae= new Person('sunjae',20);
console.log(sunjae.name);
console.log(sunjae.age);
sunjae.speak();

//Getter and setters
class User{
    constructor(firstName, lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get age(){  //값을 리턴해줌
        // return this.age;
        //1. this.age가 get age()를 호출함
        //2. return this.age; 풀스택초과됨
        //3. _를 붙여 이름을 바꿔줌
        return this._age;
    }
    set age(value){ //값을 설정해줌
        //1. set age 선언시 위에 =age 가 set age() 가르킴
        //2. this.age=value; 풀스텍초과
        this._age=value<0? 0: value;
    }
}

const user1=new User('Steve','Job',-1);
console.log(user1.age);  //-1

//Fields(public, private)
class Experiment{
    publicField=2;
    #privatedField=0;   
}
const experiment=new Experiment();
console.log(experiment.publicField);
console.log(experiment.privatedField);
 
//Inheritance
class Shape{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width*this.height;
    }
}
class Rectangle extends Shape{} //Shape의 있는 모든것을 포함
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('▲');
    }
    getArea(){
        return (this.width*this.height)/2;
    }   //overriding
} //Shape의 있는 모든것을 포함

const rectangle = new Rectangle(20,20,'blue');
console.log(rectangle.getArea());
const trigangle = new Triangle(20,20,'red');
console.log(trigangle.draw());
console.log(trigangle.getArea());

//instance of 자기의 class인지 확인
console.log(rectangle instanceof Rectangle);
