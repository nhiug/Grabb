import React from "react";
import ReactDOM  from "react-dom/client";

const Title = () => (
    <h1 className="head" tabIndex="1">
        Namaste React using JSX
    </h1>
);

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <Title />
        <h1 className="header">  Grab aapp using FC </h1>
    </div>
);
const HeadingComponent1 = () => (
    (<h1 className="header">  Grab app using FC </h1>)
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);