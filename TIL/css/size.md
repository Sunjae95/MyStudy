# px
절대적인 크기

# %
부모요소의 크기에 비례한 %임 만약 부모의 width: 600px이고 자식이 width: 50%이면 자식의 width는 300px

# em
`자기 자신의 fontSize`에 영향을 받음 
ex) fontSize * em = px  => 10 * N = N0

부모요소에 영향을 받기 때문에 나중에 많이 엮여있으면 부모자식간에 수정을 한다면 다른 요소들에게도 영향을 주어 사용하기가 까다로울수있다. 
# rem
`em`의 곤란한 상황을 개선하기위해 나온것. rem의 r은 `root`의 약어 `최상의 부모의 fontSize`에 영향을 받음 => `html 태그`

# vw, vh
`viewport width, height`의 약어 viewport 크기에 따름 단위는 viewport의 백분율임 100이 가장 큰 단위
ex) 20vw => viewport의 가로길이 20%

# vmin, vmax
vmax는 현재 viewport의 가로,세로중 `더 넓은 길이`를 따라 사용하는것임 이것도 `vw, vh`처럼 단위는 백분율임
vmin은 더 짧은 길이를 따름
