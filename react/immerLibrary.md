# immer를 사용한 더 쉬운 불변성 지키기

```javascript
const object = {
    a: 1,
    b: 2
};
object.b = 3; //object 객체의 값이 변경됨 
const nextObject = {    //이렇게 스프레드문법을 사용하여 객체를 복사하고 값을 바꿔주는 행동이 맞음
    ...object,
    b:3
};
//만약 이렇게 안하면 나중에 컴포넌트 리렌더링할 때나 최적화하는데 힘들다.
//객체 뿐만아니라 배열도 마찬가지이다. 

const state = {
    post: [
        { 
            id:1,
            title:'제목입니다.',
            body:'내용입니다.',
            comments: [ //comments를 바꾸고싶다면??
                {
                    id:1,
                    text: '와 정말 잘읽었습니다.'
                }
            ]
        },
        { 
            id:2,
            title:'제목입니다.',
            body:'내용입니다.',
            comments: [
                {
                    id:2,
                    text: '또 다른 댓글 어쩌고 저쩌고'
                }
            ]
        },
    ],
    selectedId:1
};
//1. 새로운 상태 객체 스프레드 연산자를 통하여 만든다.
//2. post안에 있는 id가 1인 객체를 찾아 해당 post객체를 복사한다.
//3. 그 안에 있는 coments에 새로운 상태를 만들어준다.
//코드화를 한다면 할수는 있는데 너무 복잡하다...
const nextState = {
    ...state,
    post: state.posts.map(post =>
        post.id === 1 
            ? {
                ...post,
                comments: post.comments.concat({
                    id:3,
                    text: '새로운 댓글;
                })
            }
            :post
    )
}
//하지만 immer를 사용한다면 불변성을 해치는 코드를 작성해도 대신 불변성 유지를 해준다. 
const nextState = produce(state, draft => {
    const post = draft.post.find(post => post.id === 1);
    post.comments.push({
        id:3,
        text: '오.. 쉽네'
    });
});
```
## 사용시..
1. 터미널에 `yarn add immer` 
2. 명령 컴포넌트 상단에 `import produce from 'immer'` 보통 produce로 불러온다. 
3. 복잡한 부분에 `produce()...`를 사용하여 복잡한 코드를 쉽게 만들어줌

필수 라이브러리가 아니기에 꼭 사용할 필요는없음!!
