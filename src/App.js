import './App.css';
import React, { useEffect, useRef, useState } from 'react';

const usePreviusCountHook = () => {
  const [current, setCurrent] = useState(null);

  const previousCountRef = useRef();

  const onClickButton = () => {
    const rand = Math.ceil(Math.random() * 100);
    setCurrent(rand);
  }

  useEffect(() => {
    previousCountRef.current = current;
  }, [current]);

  const previousCount = previousCountRef.current;

  return [current, previousCount, onClickButton];
}

function App() {

  const [current, previousCount, onClickButton] = usePreviusCountHook();

  return (
    <React.Fragment>
      <button onClick={onClickButton}>Generate</button>
      <div>Previous: {previousCount}</div>
      <div>current: {current}</div>
    </React.Fragment>
  );
}

export default App;
