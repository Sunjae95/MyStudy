# 모듈

### 정의

프로그램을 구성하는 내부의 코드가 기능별로 나누어져 있는 형태이다.

### 표준

module을 사용하기 위해 module을 인식하는 module System과 module을 다루는 키워드(내보내기, 가져오기)가 제공되어야 된다.  
CommonJs(node.js), ESM(ECMAScript 2015~)

### 내보내기

- 한 곳으로 내보내기
- 개별적으로 내보내기

> CommonJS  
> module.exports = {...} / module.exports = 값 / module.exports.키*이름 = 값 / exports.키*이름 = 값  
> ESM  
> export / export default

### 가져오기

- {함수A} {...} 모듈객체를 사용하는 형태

> CommonJS  
> require(모듈의 경로)  
> ESM  
> import 모듈\_이름 from 모듈위치

### 종류

Built-in Core Module, Community-based Module, Local Module

### 사용한다면 
1. 코드의 재사용성이 증가
2. 코드관리의 편리함
3. 코드를 모듈화하는 기준을 명확
