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

### grid-template
grid-template-rows, grid-template-columns, grid-template-areas의 단축 속성이다.

### align-content
수직(열 축) 정렬한다. grid-content의 세로 너비가 grid-container보다 작아야 한다. 

### justify-content
grid-content를 수평(행 축) 정렬한다.
grid-content의 가로너비가 grid-container보다 작아야된다. 

### align-items
grid-items들을 수직(열 축) 정렬한다.
grid-items의 세로 너비가 자신이 속한 그리드 행(Track)의 크기보다 작아야된다.

### justify-items
grid-items들을 수평(행 축) 정렬한다.
grid-items의 세로 너비가 자신이 속한 그리드 행(Track)의 크기보다 작아야된다.

# Grid Items
### gird-row / grid-column
원하는 Item을 원하는 위치에 지정할 수 있다.(확장 할 수있음)
Ex) 1~4에 있고싶다. 이러면 1 / 4 이렇게 값을 지정 중간에 /가 들어가는것을 주의!!

### row-gap /  column-gap
각 행(열)과 행(열) 사이의 간격을 지정한다.
더 명확하게는 그리드 선의 크기를 지정한다고 표현 할 수 있다.
단축 속성 gap: row column

### grid-auto-rows
암시적 행(Track)의 크기를 정의한다.
아이템이 `grid-template-rows`로 정의한 명시적 행 외부에 배치되는 경우 암시적 행의 크기가 적용된다.

### grid-auto-flow
배치하지 않은 아이템(item)을 어떤 방식의 '자동 배치 알고리즘'으로 처리할지 정의한다.
배치한 아이템은 grid-area(이하 개별 속성 포함)를 사용한 아이템을 의미한다.

### grid-row
grid-row-start 와 grid-row-end의 단축 속성이다. 각 속성을 /로 구분하는 것에 주의해야된다. 
ex) grid-row: 1 / 2
`span`: 현재 위치에서 span N만큼 N확장 start부분에 있다면 end부분을 보고 -N만큼 내려가면서 확장한다. 

### grid-area
grid-row-start, grid-column-start,grid-row-end, grid-column-end의 단축 속성이며 혹은 grid-template-areas가 참조할 영역이름을 설정할 수도 있다.
영역 이름을 설정할 경우 grid-row와 grid-column개념은 무시된다. 
주의는 `row시작 / column시작 / row끝 / column끝` 인거를 기억하자

### align-self
단일 grid-items을 수직(열 축) 정렬한다.
grid-item의 세로너비가 자신이 속한 grid-row(Track)의 크기보다 작아야한다. 

### justify-self
단일 grid-items을 수평(행 축) 정렬한다.
grid-item의 세로너비가 자신이 속한 grid-columns(Track)의 크기보다 작아야한다. 

### order
grid-item이 자동 배치되는 순서를 변경할 수 있다. 숫자가 작을수록 앞서 배치된다.

### z-index
아이템이 쌓이는 순서를 변경할 수 있다.

# Grid Functions
### repeat
행/열(Track)의 크기 정의를 반복한다. `반복되는 횟수`와 `행/열의 크기 정의`
ex) repeat(횟수, 크기);

### minmax
행열(Track)의 `최소/최대 크기`를 정의한다. 
ex) minmax(최소값, 최대값);

### fit-content
행/열(Track)의 크기를 grid-item이 포함하는 내용크기에 맞춘다. `내용의 최대 크기`를 인수로 사용한다. minmax(auto, max-content)와 유사하다.
