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
