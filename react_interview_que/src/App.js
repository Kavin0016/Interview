import logo from "./logo.svg";
import { useState } from "react";
import FolderTreeStructure from "./_component/folderTreeStructure/folderTreeStructure";
import DebounceFn from "./_component/debounceFn/deBounce";
import ThrottleFn from "./_component/throttleFn/throttle";
import { explorer } from "./_component/folderTreeStructure/folderData";
import DifferentCounters from "./_component/renderDifferentCounters/Counters";
import TabClickAndMsgPresist from "./_component/tabClickAndMsg/tabClickAndMsg";
import TodoApp from "./_component/toDoApp/ToDoApp";
import "./App.css";

function App() {
  const [compIdx, setCompIdx] = useState(0);
  const Btns = [
    {
      name: "Folder Tree Structure",
    },
    {
      name: "React Fragment",
    },
    {
      name: "De-Bounce",
    },
    {
      name: "Throttle-Fn"
    },
    {
      name: "Render Different Counters",
    },
    {
      name: "Tab Click and Message Presist",
    },
    {
      name: "To-Do App",
    },
  ];
  const renderer = {
    0: <FolderTreeStructure explorer={explorer} />,
    1: <div>Hi I am React Fragment</div>,
    2: <DebounceFn />,
    3: <ThrottleFn />,
    4: <DifferentCounters />,
    5: <TabClickAndMsgPresist />,
    6: <TodoApp />,
  };
  return (
    <div className="App">
      <div className="flexBox sp-even f-wrap mb-50">
        {Btns.map((btn, idx) => {
          return (
            <button
              key={idx}
              className={`comp-btn ${idx == compIdx ? "active-btn" : null}`}
              onClick={() => setCompIdx(idx)}
            >
              {btn?.name}
            </button>
          );
        })}
      </div>
      <div className="renderer-container">{renderer?.[compIdx]}</div>
    </div>
  );
}

export default App;
