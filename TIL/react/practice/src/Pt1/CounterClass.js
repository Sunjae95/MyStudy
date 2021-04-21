import { render } from "@testing-library/react";
import React, { Component } from "react";

class CounterClass extends Component {
  //this가 깨지지 않도록 하는 3가지 방법
  //1. 생성자로 바인드 시켜준다.
  constructor(props) {
    super(props);
    //state는 무조건 객체 형태여야 한다.
    this.state = {
      counter: 0,
      fixed: 1,
      updateMe: {
        toggleMe: false,
        dontChangeMe: 1,
      },
    };
    // this.handleIncrease = this.handleIncrease.bind(this);
  }
  //정식 javascript 문법은 아님 하지만 이렇게도 사용할 수 있음 class properties (babel활용)
  // state:{
  //     counter:0
  // }

  //2. 화살표함수를 사용하여 this를 바인딩시키지않음
  //state를 업데이트하려면 이와 같이 해야된다. 
  handleIncrease = () => {
    this.setState((state) => ({
     counter: state.counter + 1
    }));
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  handleToggle = () => {
    this.setState({
      updateMe: {
        ...this.state.updateMe,
        toggleMe: !this.state.updateMe.toggleMe,
      },
    });
  };
  //   handleIncrease() {
  //     console.log(this);
  //     console.log("increase");
  //   }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default CounterClass;

//life-cycle method
// 마운트
// constructor  컴포넌트가 처음 만들어질 때 가장 먼저 호출되는 함수
// getDerivedStartFromPros  props에서 받아온 값을 state에 동기화 시켜주는 역할 이거대신에 componentDidMount 이것을 사용
// render
// componentDidMount 외부API 호출 및 요청 보내기 / 렌더링 된 상태여서 브라우저에 직접접근가능

//업데이트
// getDeriveStateFromProps
// shouldComponentUpdate  최적화를 하는 용도 메서드를 구현안했다면 항상 리렌더링함
// render
// getSnapshotBeforeUpdate 렌더링이되고 나서 브라우저가 나타나기 직전에 DOM에 접근 할 수 있다. 만약 리턴을 한다면 다음단계에서 조회할수 있음
// componentDidUpdate

//언마운트
// componentWillUnmount  컴포넌트가 사라지기 직전에 호출되는 method