//  data and function
// data -array called task; function = add task ,remove task,clear task
// find task ,edit task
import { v4 as uuidv4 } from "uuid";
import React, { createContext, useState } from "react";
export const Tasklistcontextprovider = createContext();
const TaskListContext = (props) => {
  const [task, settask] = useState([]);
  const [edititem, setedititem] = useState("");

  //   Add task

  const createTask = (title) => {
    console.log(title);
    settask([...task, { title, id: uuidv4() }]);

    console.log(task);
  };
  // remove task
  const removeTask = (id) => {
    settask(task.filter((task) => task.id !== id));
  };
  //clear list
  const clearList = () => {
    settask([]);
    // find task
  };
  const findTask = (id) => {
    const item = task.find((task) => task.id === id);
    setedititem(item);
  };
  // edit task
  const editTask = (title, id) => {
    const edittaskarray = task.map((task) =>
      task.id === id ? { title, id } : task
    );
    settask(edittaskarray);
    setedititem(null);
  };
  return (
    <Tasklistcontextprovider.Provider
      value={{
        task,
        edititem,
        createTask,
        removeTask,
        clearList,
        findTask,
        editTask,
      }}
    >
      {props.children}
    </Tasklistcontextprovider.Provider>
  );
};

export default TaskListContext;
