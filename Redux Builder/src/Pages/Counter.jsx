import React from "react";
import CounterValue from "./CounterValue";
import CounterButton from "./CounterButton";
import Theme from "./Theme";
import { useSelector } from "react-redux";

const Counter = () => {
  const { theme } = useSelector((store) => store.ThemeReducer);
  return (
    <>
      <Theme />
      <div
        className="counter"
        style={{
          border: `2px solid ${theme === 'light' ? 'black' : 'white'}`,
          borderRadius: '8px',
          width: '25%',
          margin: '20px auto',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: theme === 'light' ? 'white' : 'black',
          color: theme === 'light' ? 'black' : 'white',
          boxShadow: theme === 'light' ? '0 4px 8px rgba(0, 0, 0, 0.1)' : '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
      >
        <CounterValue />
        <CounterButton />
      </div>
    </>
  );
};


export default Counter;
