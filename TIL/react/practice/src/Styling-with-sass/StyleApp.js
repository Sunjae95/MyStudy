import React from "react";
import "./StyleApp.scss";
import Button from "./component/Button";

function StyleApp() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">Button</Button>
        <Button>Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">
          Button
        </Button>
        <Button color="gray">Button</Button>
        <Button color="gray" size="small">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">
          Button
        </Button>
        <Button color="pink">Button</Button>
        <Button color="pink" size="small">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button outline size="large">
          Button
        </Button>
        <Button color="gray" outline>
          Button
        </Button>
        <Button color="pink" outline size="small">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button fullWidth size="large">
          Button
        </Button>
        <Button size="large" color="gray" fullWidth>
          Button
        </Button>
        <Button
          color="pink"
          fullWidth
          size="large"
          onClick={() => {
            console.log("click");
          }}
          onMouseMove={() => {
            console.log("마우스무브");
          }}
        >
          Button
        </Button>
      </div>
    </div>
  );
}

export default StyleApp;
