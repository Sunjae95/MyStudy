# Grid
2차원(행과 열)의 레이아웃 시스템을 제공한다. Flexible Box도 훌륭하지만 비교적 단순한 1차원 레이아웃을 위하며, 좀 더 복잡한 레이아웃을 위해 Grid를 사용한다.
Flex과 같이 Container와 Item이라는 두가지 개념으로 구분되어있다.

# Grid Container

### display
- grid: block요소 속성을 가짐
- inline-grid: inline같은 grid를 생성

### gird-template-columns / gird-template-rows
열과 행의 개수를 정의하고 크기도 정의한다.
Ex)gird-template-columns: repeat(3, 1fr);
`repeat()`함수를 활용하여 행의 grid-item개수를 3개씩 1비율로 생성

### grid-template-areas
지정된 그리드 영역 이름(grid-area)을 참조해 그리드 템플릿을 생성
비우고 싶다면 .을 사용해 자리를 비울수 있다.

# Grid Items
### gird-row / grid-column
원하는 Item을 원하는 위치에 지정할 수 있다.(확장 할 수있음)
Ex) 1~4에 있고싶다. 이러면 1 / 4 이렇게 값을 지정 중간에 /가 들어가는것을 주의!!