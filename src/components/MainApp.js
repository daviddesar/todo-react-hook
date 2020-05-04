import React, { useState } from "react";
import "./mainApp.scss";
import Header from "./Header/Header";
import FormTodo from "./FormTodo/FormTodo";
import TodoContainer from './TodoContainer/TodoContainer'

export default function MainApp() {

  // Get todoList from localStorage
  let localTodoList = JSON.parse(localStorage.getItem('localTodoList'));
  if (localTodoList === null) {
    localTodoList = []
  };

  // write a helper function to update localStorage
  const updateLocalStorage = (arr) => {
    let stringnifyArr = JSON.stringify(arr);
    localStorage.setItem('localTodoList', stringnifyArr);
  };
  let [todoList, setTodoList] = useState(localTodoList);

  // CURD functions
  let addTodoHandler = (inputContent) => {
    let newTodo = {
      id: Math.random().toString().substr(2, 5),
      isDone: false,
      content: inputContent
    };
    let updatedList = [newTodo]
    setTodoList(todoList = todoList.concat(updatedList))
    updateLocalStorage(todoList);
  }
  let checkDoneHandler = (id) => {
    let index = todoList.findIndex(item => item.id === id)
    let updatedList = [...todoList];
    updatedList[index].isDone = !updatedList[index].isDone;
    setTodoList(todoList = updatedList);
    updateLocalStorage(updatedList);
  }
  let deleteItemHandler = (id) => {
    let index = todoList.findIndex(item => item.id === id);
    let updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(todoList = updatedList);
    updateLocalStorage(updatedList);
  }
  let editTodoHandler = (id, editedContent) => {
    let index = todoList.findIndex(item => item.id === id);
    let updatedList = [...todoList];
    updatedList[index].content = editedContent
    setTodoList(todoList = updatedList);
    updateLocalStorage(updatedList);
  }

  
  return (
    <div className="main-app">
      <Header />
      <FormTodo addTodo={addTodoHandler}/>
      <TodoContainer todoList={todoList} checkDone={checkDoneHandler} editTodo={editTodoHandler} deleteItem={deleteItemHandler}/>
    </div>
  );
}
