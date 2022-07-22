//Here we need to show the clicked tab and
//what ever the msg we are typing on particular tab that should presist on that tab
import React, { useState } from "react";

const TABS = [
  { id: 0, name: "A", msg: "" },
  { id: 1, name: "B", msg: "" },
  { id: 2, name: "C", msg: "" },
];

const TabClickAndMsg = () => {
  const [tabs, setTabs] = useState(TABS);
  const [tabIndex, setTabIndex] = useState(0);

  const changeHandler = (e) => {
    let tabsClone = [...tabs];
    tabsClone[tabIndex].msg = e.target.value;
    setTabs([...tabsClone]);
  };

  return (
    <React.Fragment>
      <div
        className="tab-wrapper"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0px",
        }}
      >
        {tabs.map((tab) => (
          <div
            style={{
              padding: "1rem",
              backgroundColor: "blue",
              color: "white",
              fontSize: "12px",
              cursor: "pointer",
            }}
            onClick={() => setTabIndex(tab.id)}
          >
            <span>{tab.name}</span>
          </div>
        ))}
      </div>
      <div
        className="active-tab-wrapper"
        style={{
          backgroundColor: "white",
          color: "blue",
          padding: "2rem",
          fontSize: "16px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <span>Hello I am Tab {TABS[tabIndex].name}</span>
      </div>
      <input
        className="input-msg-wrapper"
        style={{
          padding: "2rem",
          color: "GrayText",
          fontSize: "14px",
          width: "95%",
        }}
        value={tabs[tabIndex].msg}
        onChange={(e) => changeHandler(e)}
      />
    </React.Fragment>
  );
};

export default TabClickAndMsg;
