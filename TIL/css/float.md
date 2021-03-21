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

사용시: float속성이 추가된 요소는 display 속성의 값이 대부분 block으로 수정됨(인라인특성을 가진 요소를 굳이 block으로 설정할 필요가 없다.) 그러나 flex, inline-flex는 변화없음

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

# position
요소의 위치 지정 방법의 유형(기준)을 배치를 설정

속성 값은 static, `relative(요소 자신을 기준으로 배치)`, `absolute(위치 상 부모 요소를 기준으로 배치)`, fixed(브라우저(뷰포트)를 기준으로 배치), sticky(스크롤 영역 기준으로 배치)

### relative
현재 자신이 위치한 곳에서 기준으로 배치
```css
.relavite {
   position: relative;
   top:20px;
   left:30px;
} /* 클래스가 추가되면 현재 위치에서 위에서 20px, 왼쪽에서30px만큼 떨어지게함 */ 
```
하지만 자기 자신이 완전히 옮겨지는것이 아니라 주변 요소들의 영향을 받아 자신은 그대로인데 보여지는것은 옮겨진것처럼 보이는것이다. 그래서 relative를 선언한다면 주위 형제요소들의 위치를 잘 생각해보고 선언하는 것이 중요하다.

### absolute
위치 상 부모요소의 기준으로 배치. 여기서 위치 상 부모요소는 현재 요소의 부모가 아니라 자신위의 부모요소이면서 `position: xxx(static 제외)`으로 선언된 부모를 뜻한다. 또한 적용된다면 display 속성값이 대부분 block으로 수정된다.
```html
<div class="grand-parent">
   <div class="parent">
      <div class="child"> <!-- position:absolute -->  
      </div>
   </div>
</div>
```
child 입장에서 position된 부모를 찾기 위해 한단계씩올라간다. parent -> grand-parent -> body -> html ->window 이 순서로 올라가는데 만약 중간에 position이 안되어있다면 뷰포트(window객체)의 위치 기준으로 position을 설정한다.

### fixed
뷰포트 기준으로 위치를 지정함 absolute에서 부모요소가 없을때랑 결과는 동일함
또한 스크롤을 하더라도 뷰포트 기준이라서 그 자리에 항상 있다. (쇼핑몰의 배너광고, 해더광고등..) absolute와 마찬가지로 display 속성값이 대부분 block으로 수정된다.

### sticky
스크롤 영역 기준으로 배치
top, bottom..등 속성값이 한개 이상 존재해야된다.(IE 지원불가..!)

### 요소 쌓임 순서(Stack order)
요소가 쌓여 있는 순서를 통해 어떤 요소가 사용자와 가깝게 있는지(더 위에 쌓이는지)를 결정(Z축)
>position > z-index > HTML마지막코드
1. static을 제외한 position 속성값이 있을 경우 가장 위에 쌓임(값 무관)
2. position이 모두 존재 한다면 z-index속성의 숫자 값이 높을 수록 위에 쌓임
3. position 속성값이 있고, z-index속성의 숫자 값이 같다면, 'HTML'의 마지막 코드일 수록 위에 쌓임(나중에 작성한 코드(요소))

