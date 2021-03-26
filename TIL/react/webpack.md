# Webpack
웹펙은 웹 어플리케이션을 제작할 때 필요한 모듈 번들러도구 이다. 

## 기본구조
웹펙이 바라보는 모듈 - js, sass, hbs, jpg,png...

### Entry
모듈의 의존관계를 이해하기 위한 시작점을 설정

### Output
Webpack이 생성하는 번들파일에 대한 정보를 설정
```javascript
const path = require('path');
{...
  output: {
      path: path.resolve(__dirname, 'dist'),    //__dirname은 path모듈에 있는 변수 root폴더를 가르킴
      filename: 'bundle.js'
  },
 ...
}
```
이렇게 되면 웹펙실행 시 root/dist라는 폴더에 bundle.js 파일이 번들링 되어 생성된다.

### Mode
1. package.json -- save-dev, --save
- 어플리케이션 내부에 직접 포함되는 모듈
- 개발 과정에 필요한 모듈
dependencies: --save
devDependencies: --save-dev
2. 개발환경과 프로덕션 환경
개발환경은 개발할 때 유용하고 편리한 기능을 갖춘 어플리케이션 환경이 있고 프로덕션은 사용하는 관점에서 빠르고 필수적이 요소만 들어가 속도를 향상시키려는 어플리케이션 환경이 되기때문에 두 환경을 나눈다. 그래서 웹펙은 `development, production, none`의 3가지 모드를 제공한다. 
development와 production은 웹펙이 필요한 요소만 만들어서 제공해주고, none은 사용자가 직접 설정하는것을 뜻한다. 
3. Mode & Webpack-merge
개발환경과 프로덕션 환경을 나누면 공통된 코드가 발생하기 때문에 공통 코드는 따로 만들고 `webpack-merge`를 사용하여 병합해주는 것을 추천한다.

### Loader
다양한 모듈들을 입력받아 처리하는 역할을 한다. 웹펙은 기본적으로 js, jsx파일을 받지만 다른 확장자로 된 파일은 따로 Loader를 선언하여 정의해줘야된다. 
```javascript
//기본구조
module.exports = {
  module: {
    rules: [loader1, loader2]
  }
}
```
test키를 통해 모듈을 지정
use키를 사용해 사용할 로더와 옵션을 설정

###  plugin
웹펙이 동작하는 전체적인 과정에서 개입할 수 있어 웹펙이 동작하는 전반적인 과정에서 
```javascript
{...
plugins: [new Plugin({...option}), ...]
...}
``` 
