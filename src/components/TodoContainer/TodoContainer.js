import React from "react";
import "./todoContainer.scss";
import TodoItem from "./TodoItem/TodoItem";

export default function TodoContainer(props) {
  let renderTodoItem = () => {
    if (props.todoList.length === 0) {
      return (
        <p className="placeholder-todo">
          Nothing to do? Add a task ^.^
        </p>
      );
    } else {
      return props.todoList.map((todo) => {
        return (
          <TodoItem
            checkDone={props.checkDone}
            deleteItem={props.deleteItem}
            content={todo.content}
            id={todo.id}
            key={todo.id}
            isDone={todo.isDone}
            editTodo={props.editTodo}
          />
        );
      });
    }
  };
  return <div className="todo-container m-top-large">{renderTodoItem()}</div>;
}
