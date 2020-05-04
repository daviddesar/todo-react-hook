import React, { useState } from "react";
import "./todoItem.scss";

export default function TodoItem(props) {
  let [isChanged, setIsChanged] = useState(false);

  // ------- Helper functions
  const renderInput = () => {
    return (
      <input
        spellCheck={false}
        autoFocus={true}
        type="text"
        className="todo-item__edit"
        defaultValue={props.content}
        onBlur={(e) => {
          props.editTodo(props.id, e.target.value);
          setIsChanged((isChanged = !isChanged));
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.editTodo(props.id, e.target.value);
            setIsChanged((isChanged = !isChanged));
          }
        }}
      />
    );
  };
  const renderSpan = () => {
    if (props.isDone === true) {
      return (
        <span
          className="todo-item__content"
          style={{ textDecoration: "line-through" }}
        >
          {props.content}
        </span>
      );
    } else {
      return <span className="todo-item__content">{props.content}</span>;
    }
  };

  let renderContent = () => {
    if (!props.isEdit) {
      return isChanged ? renderInput() : renderSpan();
    } else {
      return renderSpan();
    }
  };

  // ------- class modifications
  let buttonClass = ["todo-item__btn"];
  let divClass = ["todo-item"];
  if (props.isDone) {
    divClass.push("isDone");
  }
  if (isChanged) {
    buttonClass.push("display-btn");
  }

  return (
    <div className={divClass.join(" ")}>
      {renderContent()}
      <div className="todo-item__btn-container">
        <button
          style={{ display: "inline-block" }}
          className={buttonClass.join(" ")}
          onClick={() => {
            setIsChanged((isChanged = !isChanged));
          }}
        >
          <i className="fa fa-pencil-alt"></i>
        </button>
        <button
      
          className={buttonClass.join(" ")}
          onClick={() => {
            props.deleteItem(props.id);
          }}
        >
          <i className="fa fa-trash-alt"></i>
        </button>
        <button
       
          className={buttonClass.join(" ")}
          onClick={() => {
            props.checkDone(props.id);
          }}
        >
          <i className="fa fa-check"></i>
        </button>
      </div>
    </div>
  );
}
