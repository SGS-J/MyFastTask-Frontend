import React, { useReducer } from "react";
import reducer from "./tasksReducer";
import TaskCreation from "./components/TaskCreation/TaskCreation";
import TaskPanel from "./components/TaskPanel/TaskPanel";

const initialState = {
  tasksPanel1: {
    id: "tasks-panel-1",
    content: [],
  },
  tasksPanel2: {
    id: "tasks-panel-2",
    content: [],
  },
  tasksPanel3: {
    id: "tasks-panel-3",
    content: [],
  },
  taskToAddTitle: "",
  taskToAddDescription: "",
};

export default function TasksPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (type, value) => {
    dispatch({ type, value });
  };

  const handleCreateTask = () => {
    dispatch({ type: "task-create" });
  };

  const handleUpdateTaskPanel = (source, destination, taskId) => {
    dispatch({
      type: "update-task-panel",
      value: {
        taskId,
        sourcePanelId: source.droppableId,
        sourcePanelIndex: source.index,
        destinationPanelId: destination.droppableId,
        destinationPanelIndex: destination.index,
      },
    });
  };

  return (
    <main id="tasks-template" className="row justify-content-center">
      <TaskCreation
        taskTitle={state.taskToAddTitle}
        taskDescription={state.taskToAddDescription}
        handleChange={handleChange}
        handleCreateTask={handleCreateTask}
      />
      <TaskPanel
        tasksPanel1={state.tasksPanel1}
        tasksPanel2={state.tasksPanel2}
        tasksPanel3={state.tasksPanel3}
        updateTaskPanel={handleUpdateTaskPanel}
      />
    </main>
  );
}
