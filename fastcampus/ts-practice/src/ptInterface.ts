interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    constructor(public radius: number){
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    //constructor 선언 전 까지 선언을 지우고 constructor 안에 public, private로 선언해서 줄일수있다. 
    width: number;
    height: number;
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2,5);

// type Person = {} 이렇게도 선언가능
interface Person {
    name: string;
    age?: number;   //?는 있을수도 있고 없을수도 있음을 뜻함
}
//name과 age가 중복되면 상속을 받을 수 있다.
// interface Developer {
//     name: string;
//     age?: number;
//     skills: string[];
// }
// 상속받는 Developer
// type Developer = Person & {} 이렇게 상속 받을 수 있다. type alias라고 함
interface Developer extends Person{
    skills: string[];
}

const person: Person = {
    name: '사람',
    age: 20
    //interface에 정의되지않은 선언을 하면 오류남
}

const expert: Developer ={
    name: '이개발',
    skills: ['js', 'react', 'ts']
}

//interface 및 상속 사용할 때 유의점
//라이브러리를 사용하는것이면 interface로 선언하는것을 권장
//일관성있게 사용