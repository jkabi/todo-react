import React, { useContext } from "react";
import { Tasklistcontextprovider } from "../context/TaskListContext";

const Task = ({ task }) => {
  const { findTask, removeTask } = useContext(Tasklistcontextprovider);
  return (
    <div class="row justify-content-center mt-3 ">
      <li class="list-group-item col-8">{task.title}</li>
      <button
        onClick={() => findTask(task.id)}
        class="col-1 btn btn-primary mx-2 "
      >
        edit
      </button>
      <button onClick={() => removeTask(task.id)} class="col-1 btn btn-danger">
        delete
      </button>
    </div>
  );
};

export default Task;
