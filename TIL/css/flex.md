# Flex
CSS는 Flex가 나오기 전에 수직, 수평 정렬 할 때 float, inline-block등 대체 방법을 사용해왔다. 하지만 Flex가 나온뒤로는 Layout을 만들때 Flex를 사용하는 것을 추천한다.

Flex는 Container와 Items를 가진다. Container는 Items를 감싸는 부모요소이며, 각Item을 정렬하기 위해선 Container가 필수이다. 또한 주의 할점은 `Container와 Items에 적용하는 속성이 구분`되어있다는 점이다.

# Flex Container

### display
display를 통해 Container를 정의하는 방법은 flex 또는 inline-flex 값을 부여하는 것이다.
- flex: 수직으로 쌓임 (블록요소)
- inline-flex: 수평으로 쌓임(inline속성요소)

### flex-flow
이 속성은 단축 속성으로 Flex Items의 `주 축`을 설정하고 Items의 `여러 줄 묶음`(줄 바꿈)도 설정한다.
- flex-direction: Items의 주축을 설정
- flex-wrap: Items의 여러 줄 묶음 설정 

### justify-content
`주 축(main-axis)`의 정렬 방법을 설정한다.

### align-content
`교차 축(cross-axis)`의 정렬 방법을 설정한다. flex-wrap속성을 통해 Items가 `여러 줄`(2줄 이상)이고 여백이 있을 경우만 사용할 수 있다. 한줄일 경우 `align-items`속성 사용

### align-items
`교차 축(cross-axis)`에서 items의 정렬 방법을 설정한다. 한줄일 경우 사용

# Flex Items

### order
Item의 순서를 정한다. 숫자를 지정하고 숫자가 클수록 순서가 밀리며 음수가 허용이된다.

### flex-grow
Item의 증가 너비 비율을 정한다. 숫자가 크면 더 많은 너비를 가지며, Item이 가변 너비가 아니거나, 값이 0일 경우 효과가 없다.
(비율이라 생각하면됨)

### flex-shrink
Item이 감소하는 너비의 비율을 설정한다.

### flex-basis
Item의 (공간 배분 전) 기본 너비를 설정한다. 값이 auto일 경우 width, height등의 속성으로 Item의 너비를 설정할 수 있다. 하지만 단위가 주어질 경우 설정할수 없다. 쉽게말하면 Item의 Content의 기본너비를 설정한다.

### flex 단축속성
flex: flex-glow flex-shrink flex-basis
사용할 때 모두 명시를 해줘야된다. 안그러면 0으로 삽입