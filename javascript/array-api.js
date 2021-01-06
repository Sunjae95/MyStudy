// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  //my solution
  const str=fruits[0]+fruits[1]+fruits[2];
  console.log(str);
  console.log(typeof str);
  //ellie solution
  const result=fruits.join("");
  console.log(result);
  console.log(typeof result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  //my solution
  const res=fruits.split(',');
  console.log(res);
  console.log(typeof res);
  //ellie solution  same
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  //my solution
  array.sort().reverse();
  console.log(array);
  //ellie solution
  const result3=array.reverse();
  console.log(result3);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  //my solution
  const res4=array.slice(2);
  console.log(res4);
  //ellie solution
  const result4=array.slice(2,5);
  console.log(result4);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  //my solution
  for(i=0;i<students.length;i++){
    if(students[i].score===90) console.log(students[i]);
  }
  //ellie solution
  // const result5=students.find(function(student,index){
  //   console.log(student,index);
  // });
  //리턴한다면 맨처음 걸리는것이 리턴됨
  const result5=students.find((student,index)=>student.score===90 );
  console.log(result5);
}

// Q6. make an array of enrolled students
{
  //my solution
  let arr=[];
  const res6=students.find((student)=>{
    if(student.enrolled===true) arr+=student;
  });
  console.log(arr);
  //ellie solution
  const result = students.filter((student)=>student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
//다른 수로 변환해주는 api임
{
  //my solution
  const res7=students.forEach((student)=>student.score);
  console.log(res7);
  //ellie solution
  //배열안에서 콜백함수를 부르면서 가공하고싶은 값으로 바뀌어짐
  //콜백함수로 이어지는 인자는 이해하기 쉬운 단어로 지정하기!!!
  const result=students.map((student)=>student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  //my solution
  const res8=students.find((student)=>{
    if(student.score<=50) return true;
  });
  console.log(res8);
  //ellie solution
  //한조건만 맞아도 true값
  const result8 =students.some((student)=>student.score<50);
  console.log(result8);
   //배열에서 모든 조건이 맞아야 true값
  const result =students.every((student)=>student.score<50);
  console.log(result);
  
}

// Q9. compute students' average score
{
  //my solution
  const res=students.map((student)=>student.score);
  let sum=0;
  for(let i=0;i<res.length;i++) sum+=res[i];
  console.log(sum);
    //ellie solution
    //누적할때 필요함
    //reduceRight는 거꾸로 실행
  const result=students.reduce((prev,curr)=>{
    console.log('---------');
    console.log(prev);
    console.log(curr);
    return prev+curr.score;
  },0);
  console.log(result/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  //my solution
  const res=students.map((student)=>student.score);
  console.log(res.toString);
  //ellie solution
  const result=students
  .map((student) => student.score)  //점수로 변환
  .filter((score)=>score>=50)       //조건을 걸어 50점이상만 출력
  .join();                          //string으로 변환
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  //my solution
  const res=students
  .map((student)=>student.score)
  .sort();
  console.log(res);
  //ellie solution
  const result=students
  .map((student)=>student.score)
  .sort((a,b)=>a-b)   //반대로는 b-a로
  .join();
  console.log(result);
}
