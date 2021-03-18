## float 
요소를 좌우 방향으로 띄움(수평 정렬)
하지만 css3에서는 <strong>flexbox</strong>가 있어서 요즘 만들어진 웹사이트는 flexbox를 사용함

속성값
- none: 요소 띄움 없음 (기본값)
- left: 왼쪽으로 띄움
- right: 오른쪽으로 띄움
float을 사용하고싶으면 left, right를 많이쓰게 될것임

left는 왼쪽으로 정렬하고 왼쪽부터 쌓기 시작함
right는 오른쪽으로 정렬하고 오른쪽부터 쌓기 시작함

문제점:  float선언이 안 되어있는 것이 있으면 다른 요소 선언 시 `겹쳐서 나오는 현상`이 있을 수 있음
### clear
float의 문제점을 해결하기 위해 나온 속성 float을 해제하고 싶을때 사용하는것
- left: float가 left일때 겹쳐지지 않기위해 사용
- right: float가 right일때 겹쳐지지 않기위해 사용
- both: 매번 left, right사용하기 어려우니 자동으로 맞춰주기 위해 사용

float 사용하는건 좋지만 float을 사용했을 때는 `무조건 해제`를 해줘야 된다.

해제하는 방법
1. 형제요소 clear: (left, right, both)
2. 부모요소 overflow: (hidden,auto) (비추천)
3. 부모요소 clearfix 클래스 추가 (추천)

>형제요소에서 해제<br>
>float 속성이 추가된 요소의 다음 형제요소에 clear속성 추가<br>
>단점: 다음 요소가 없다면 clear하기 애매함<br>

>부모요소에서 해제1<br>
>float속성이 추가된 요소의 부모요소에 overflow 속성 추가<br>
>불필요한 다른형제를 포함하지 않고 부모를 wrapping하여 처리하는 방식 하지만 float이랑은 아무런 관련없는 속성임 (편법임)!!

```html
<!-- html -->
<div class="parent">
   <div class="child"></div>
   <div class="child"></div>
</div>
<div class="other"></div>
<!-- css -->
```

```css
.parent {
   overflow: hidden;
   background: yellowgreen;
}

.child {
   width:50px;
   height:50px;
   background: aqua;
   margin:10px;
   float:left;
}
.other {
   width:50px;
   height:50px;
   background: aqua;
   margin:10px;
}
```

>부모요소에서 해제2(추천)<br>
>float 속성이 추가된 요소의 부모요소에 미리지정된 clearfix클래스 추가
```css
/* html 및 css는 같고 아래코드가 추가되기만함 */
...
.clearfix::after{
   context: "";
   clear: both;
   display: block;
}
...
/* 결과는 동일 */
```
### 결과
![overflow](..\image/overflowHidden.PNG)

