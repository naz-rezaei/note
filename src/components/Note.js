import React from "react";

function Note(props) {
  return (
    
    <div className="note"
          style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
      }}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
