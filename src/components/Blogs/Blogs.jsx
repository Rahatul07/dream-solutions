import React from "react";
import vector from "../../assets/All Images/Vector.png";
import vector2 from "../../assets/All Images/Vector-1.png";

const Blogs = () => {
  return (
    <div>
      <div className="mx-auto w-full h-44 bg-purple-50 relative">
        <h1 className="pt-14  mb-20 text-5xl font-bold text-center text-purple-600">
          Blogs
        </h1>
        <img className="absolute bottom-0 left-0 w-60" src={vector} alt="" />
        <img className="absolute top-0 right-0 w-60" src={vector2} alt="" />
      </div>
      <div className="ml-20 mt-10 mr-20 ">
        <div className="border border-purple-300 p-5 rounded-2xl">
          {" "}
          <h1 className="text-2xl font-bold my-2">
            01. When should you use context API?
          </h1>
          <p>
            <span className="text-2xl font-bold "> Ans: </span>
            Basically, context API is a shortcut method of sharing data. You can
            use this in stead of props drilling. The Context API in React is a
            way to manage and share state across multiple components in a React
            application. It is typically used in scenarios where data needs to
            be passed down through multiple levels of nested components without
            explicitly passing the data through props.
          </p>
        </div>
        <div className="border border-purple-300 p-5 rounded-2xl mt-10">
          {" "}
          <h1 className="text-2xl font-bold my-2">02. What is custom hook?</h1>
          <p>
            <span className="text-2xl font-bold "> Ans: </span>
            There are many kinds of hooks in react. These are very useful. In
            React, a custom hook is a reusable function that encapsulates logic
            and state, and can be used in functional components to add
            functionality to them. Custom hooks are a way to share and reuse
            stateful logic among multiple components without using class
            components or duplicating code.
          </p>
        </div>
        <div className="border border-purple-300 p-5 rounded-2xl mt-10">
          {" "}
          <h1 className="text-2xl font-bold my-2">03. What is useRef?</h1>
          <p>
            <span className="text-2xl font-bold "> Ans: </span>
            useRef is a hook in React that provides a way to create and manage a
            mutable reference to a value or an element in a functional
            component. It allows you to persist a value across renders without
            causing the component to re-render, and it can be used to access and
            modify the properties of DOM elements directly. The useRef hook
            returns an object with a current property, which represents the
            current value of the reference. Unlike the useState hook, which
            triggers a re-render when the state value changes, updating the
            current property of a useRef object does not trigger a re-render of
            the component.
          </p>
        </div>
        <div className="border border-purple-300 p-5 rounded-2xl mt-10">
          {" "}
          <h1 className="text-2xl font-bold my-2">04. What is useMemo?</h1>
          <p>
            <span className="text-2xl font-bold "> Ans: </span>
            useMemo is a hook in React that allows you to optimize the
            performance of your components by memoizing the results of expensive
            computations or calculations. It helps to prevent unnecessary
            re-computations of values that do not change between renders,
            improving the performance of your React application. The useMemo
            hook takes two arguments: a function that computes a value, and an
            array of dependencies. The hook memoizes the result of the
            computation and returns the memoized value. The memoized value is
            only recomputed if any of the dependencies in the array change. If
            none of the dependencies change, the memoized value is returned
            directly without re-computing the value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
