import React, { useContext, createContext } from "react";

const MyContext = createContext("defaultValue");

function Child() {
  const text = useContext(MyContext);
  return <div>안녕하세요? {text}</div>;
}

function Parent() {
  return <Child />;
}

function GrandParent() {
  return <Parent />;
}
function ContextSample() {
  return (
    <MyContext.Provider value="providerGood">
      <GrandParent text="good" />
    </MyContext.Provider>
  );
}

export default ContextSample;
