import React from "react";
import Styles from "./css/TodoApp.module.css";

function TodoListItem() {
  return (
    <>
      <div className={Styles.listWrap}>
        <form action="">
          <input type="checkbox" className="mr-5" />
        </form>
        <h4 className="mx-5 mb-0 ">Eat</h4>
        <div className="option-Wrap">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoListItem;
