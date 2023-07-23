import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Tasklistcontextprovider } from "../context/TaskListContext";
const TaskForm = () => {
  const [title, settitle] = useState();
  const { createTask, clearList, edititem, editTask } = useContext(
    Tasklistcontextprovider
  );
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!edititem && title !== "") {
      createTask(title);
      settitle("");
    } else if (edititem) {
      editTask(title, edititem.id);
    } else {
      alert("Enter task");
    }
  };
  useEffect(() => {
    if (edititem) {
      settitle(edititem.title);
    } else {
      settitle("");
    }
  }, [edititem]);
  const clear = (e) => {
    e.preventDefault();
    clearList();
  };
  return (
    <>
      <div>
        <form
          onSubmit={handlesubmit}
          className="row justify-content-center mb-3 mt-5  mx-auto"
        >
          <div class=" col-7">
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Enter Task"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>
          <div className="col-3 ">
            <button type="submit" class="btn btn-primary me-2  col-5">
              {!edititem ? "Add " : "Edit"}
            </button>
            <button onClick={() => clear} class="btn btn-primary col-5">
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
