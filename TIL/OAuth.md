# OAuth란 무엇인가?
`인증`을 위한 오픈 스탠더드 프로토콜로, 사용자가 Facebook이나 트위터 같은 인터넷 서비스의 기능을 `다른 애플리케이션(데스크톱, 웹, 모바일 등)`에서도 사용할 수 있게 한 것이다.

# OAuth 1.0 인증과정
|용어|설명|
|:-|:-|
|User|Service Provider에 계정을 가지고 있으면서, Consumer를 이용하려는 사용자|
|Service Provider|OAuth를 사용하는 Open API를 제공하는 서비스|
|Consumer|OAuth 인증을 사용해 Service Provider의 기능을 사용하려는 애플리케이션이나 웹 서비스|
|Request Token|	Consumer가 Service Provider에게 접근 권한을 인증받기 위해 사용하는 값. 인증이 완료된 후에는 Access Token으로 교환한다.|
|Access Token|인증 후 Consumer가 Service Provider의 자원에 접근하기 위한 키를 포함한 값|

![OAuth 1.0 인증과정](https://oauth.net/core/diagram.png)
출처:https://oauth.net/core/diagram.png


# OAuth 2.0 인증과정
>[참조]<br>
>https://d2.naver.com/helloworld/24942