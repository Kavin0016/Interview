import React, { useState } from "react";

const flexCss = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const mrgBtmCss = {
  marginBottom: "20px",
};

const TodoApp = () => {
  const [state, setState] = useState({
    nodeList: [],
    title: "",
    date: "",
  });

  const updateState = (nState) => {
    return setState((prevState) => {
      return { ...prevState, ...nState };
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    updateState({ [name]: value });
  };

  const validate = () => {
    if (!state.title || !state.date) {
      alert("Enter Title and Date");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    let { nodeList, date, title } = state;
    let node = {
      title,
      date,
    };
    nodeList.push(node);
    setState({ nodeList: [...nodeList], date: "", title: "" });
  };

  return (
    <div style={flexCss}>
      <input
        type={"text"}
        style={mrgBtmCss}
        name={"title"}
        value={state.title}
        onChange={handleChange}
      />
      <input
        type={"date"}
        style={mrgBtmCss}
        name={"date"}
        value={state.date}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {state.nodeList.map((list, idx) => {
          return (
            <li key={idx}>
              <span>
                {list.title} {list.date}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoApp;
