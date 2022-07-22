import React, { useState } from "react";

const DebounceFn = () => {
  let [res, setRes] = useState([]);
  const useDebounce = (cb, d) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };

  const handleChange = useDebounce((e) => {
    setRes([...res, e.target.value]);
    e.target.value = "";
  }, 1000);

  return (
    <>
      <div className="App">
        <input onChange={handleChange} style={{ float: "left" }} />
        <span
          onClick={() => setRes([])}
          style={{ float: "right", cursor: "pointer" }}
        >
          Clear Results
        </span>
        <ol style={{ display: "inline-block" }}>
          {res?.map((val, idx) => {
            return <li key={idx}>{val}</li>;
          })}
        </ol>
      </div>
    </>
  );
};

export default DebounceFn;
