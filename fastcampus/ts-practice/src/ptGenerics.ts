// 함수, 클래스, 인터페이스 등 타입의 호환을 맞추기위해 사용을 한다.
// Generics를 사용하지 않으면 유추를 못해 제대로된 값이 안나올수 있는데 사용한다면 유추를 통해 값을 제대로 리턴할 수 있다.
function merge<T1, T2>(a: T1, b:T2){
    return {...a, ...b};
}

const merged = merge({foo:1}, {bar:2});
// any로 사용하는것처럼 되지만 타입은 지켜지면서 받아준다.
function wrap<T> (param: T){
    return {param};
}

//Generics는 여러개 선언가능
interface Items<T> {    //type Items<T> = {}
    list: T[];
}
//number, string 이렇게 따로 선언도 가능함
const items: Items<number> ={
    list: [1,2,3,4]
}
const itemsS: Items<string> ={
    list: ['aa','bb']
}

class Queue<T> {
    list: T[] =[];

    get length() {
        return this.list.length;
    }
    enqueue(item: T){
        this.list.push(item);
    }
    dequeue(){
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

while(queue.length >0 ){
    console.log(queue.dequeue());
}