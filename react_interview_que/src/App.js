import logo from "./logo.svg";
import { useState } from "react";
import FolderTreeStructure from "./_component/folderTreeStructure/folderTreeStructure";
import DebounceFn from "./_component/debounceFn/deBounce";
import ThrottleFn from "./_component/throttleFn/throttle";
import { explorer } from "./_component/folderTreeStructure/folderData";
import DifferentCounters from "./_component/renderDifferentCounters/Counters";
import TabClickAndMsgPresist from "./_component/tabClickAndMsg/tabClickAndMsg";
import TodoApp from "./_component/toDoApp/ToDoApp";
import TypeAHead from "./_component/typeAHead/type_a_head";
import TicTacToe from "./_component/ticTacToe";
import TicTacToeHooks from "./_component/ticTacToe_Hooks/index.js"
import ImageCaurosel from "./_component/imageCaurosel";
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
    {
      name: "System Design::Type-a-head"
    },
    {
      name: "System Design::TicTacToe-1"
    },
    {
      name: "System Design::TicTacToe-2::Optimised"
    },
    {
      name: "System Design :: ImageCaurosel"
    }
  ];
  const renderer = {
    0: <FolderTreeStructure explorer={explorer} />,
    1: <div>Hi I am React Fragment</div>,
    2: <DebounceFn />,
    3: <ThrottleFn />,
    4: <DifferentCounters />,
    5: <TabClickAndMsgPresist />,
    6: <TodoApp />,
    7: <TypeAHead />,
    8: <TicTacToe />,
    9: <TicTacToeHooks />,
    10: <ImageCaurosel />
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
