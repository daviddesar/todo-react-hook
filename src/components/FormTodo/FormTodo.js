import React, { useState } from "react";
import "./formTodo.scss";

export default function FormTodo(props) {
  
  let [typing, typingListener] = useState("");
  let inputRef = React.createRef();
  let typingHandler = (event) => {
    typingListener((typing = event.target.value));
  };
  return (
    <div className="form-todo m-top-med">
      <input
        spellCheck="false"
        ref={inputRef}
        type="text"
        className="form-todo__input"
        placeholder="Add your task here"
        onChange={typingHandler}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            if (typing.length === 0) return;
            props.addTodo(typing);
            inputRef.current.value = "";
          }
        }}
      />
      <button
        className="btn--green m-top-small"
        onClick={() => {
          if (typing.length === 0) return;
          props.addTodo(typing);
          inputRef.current.value = "";
        }}
      >
        Add
      </button>
    </div>
  );
}
