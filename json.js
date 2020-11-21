//1.Object to JSON
//stringfy(obj) obj를 받아와서 string으로 변환
//console.log 했을때''이아니라  ""로 표기됨
let json=JSON.stringify(true);
console.log(json);

json=JSON.stringify(['apple','banana']);
console.log(json);

const rabbit={
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),

    jump:()=>{
        console.log(`${name} can jump!`);
    },
}
//symbol, method not contain

//nomal
json=JSON.stringify(rabbit);
console.log(json);
//want property get
json=JSON.stringify(rabbit,['name','color']);
console.log(json);
//callbackFn
json=JSON.stringify(rabbit,(key,value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key==='name'?'ellie':value;
});
console.log(json);

//2.JSON to Object
// parse(json) string을 받아와서 obj로 변환
console.clear();
json=JSON.stringify(rabbit);
let obj=JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); error because when JSON.stringify is not passed method 
console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); error
//callbackFn key=>Date() class conversion
obj=JSON.parse(json, (key,value)=>{
    return key==='birthDate'?new Date(value):value;
});
console.log(obj.birthDate.getDate());

// 정리
// JSON에는 두가지 방식이있음 
// obj >>>> json      method: stringify(obj)
// json >>>> obj      method: parse(json)
// stringify할때 obj에서는 method나 symbol은 json형태로 바뀌지않고
// 나머지는 다 string형식으로 됨
// parse할때는 그대로 string으로 가져옴
// 혹여나 가져올때 callbackFn를 통해 obj였을때의 데이터타입을 지정할수있음

// JSON Diff checker: http://www.jsondiff.com/
// JSON Beautifier/editor: https://jsonbeautifier.org/
// JSON Parser: https://jsonparser.org/
// JSON Validator: https://tools.learningcontainer.com/j...