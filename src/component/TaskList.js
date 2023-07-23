import React, { useContext } from "react";
import { Tasklistcontextprovider } from "../context/TaskListContext";
import Task from "./Task";
const TaskList = () => {
  const { task } = useContext(Tasklistcontextprovider);
  return (
    <div className="p-5">
      {task.length ? (
        <div>
          <ul className="list-group">
            {task.map((task) => {
              return <Task task={task} key={task.id} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="text-center text-white h3"> No Task to Display</div>
      )}
    </div>
  );
};

export default TaskList;
