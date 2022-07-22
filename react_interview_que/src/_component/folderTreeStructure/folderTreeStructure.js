import React, { useState, memo } from "react";

function FolderTreeStructure({ explorer }) {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div>
        <span
          onClick={() => setExpand(!expand)}
          style={{ fontWeight: "bold", cursor: "pointer" }}
        >
          {expand ? "▼" : "▶"}{" "}
          <span style={{ paddingLeft: "5px" }}>{explorer?.name}</span>
          <br />
        </span>
        {expand && (
          <div
            style={{ display: expand ? "block" : "none", paddingLeft: "15px" }}
          >
            {explorer?.items?.map((exp, idx) => {
              return <FolderTreeStructure key={exp.name} explorer={exp} />;
            })}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <>
        <span>
          {explorer?.name}
          <br />
        </span>
      </>
    );
  }
}

export default FolderTreeStructure;
