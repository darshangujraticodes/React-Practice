import React from "react";
import Styles from "./css/TodoApp.module.css";
import TodoListItem from "./TodoListItem";

function TodoApp() {
  return (
    <>
      <section className="todoApp-Section py-5 bg-white">
        <div className="container">
          <div className="row  justify-content-center ">
            <h2>Todo App</h2>
            <div className={Styles.todoWrapper}>
              <h4>Todo List</h4>
              <TodoListItem />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TodoApp;
