import React, { useReducer } from "react";
import TaskCreation from "./components/TaskCreation/TaskCreation";
import TaskPanel from "./components/TaskPanel/TaskPanel";
import _ from "lodash";

function* generateId() {
  let id = 100;
  while (true) {
    yield String(id++);
  }
}

const idGenerator = generateId();

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

const reducer = (state, action) => {
  switch (action.type) {
    case "title":
      return { ...state, taskToAddTitle: action.value };
    case "description":
      return { ...state, taskToAddDescription: action.value };
    case "task-create": {
      const title = state.taskToAddTitle;
      const description = state.taskToAddDescription;
      return {
        ...state,
        taskToAddTitle: "",
        taskToAddDescription: "",
        tasksPanel1: {
          ...state.tasksPanel1,
          content: state.tasksPanel1.content.concat({
            taskId: idGenerator.next().value,
            title,
            description,
          }),
        },
      };
    }
    case "update-task-panel": {
      let newState = { ...state };
      const {
        taskId,
        sourcePanelId,
        sourcePanelIndex,
        destinationPanelId,
        destinationPanelIndex,
      } = action.value;

      const sourcePanel = _.findKey(state, (o) => o.id === sourcePanelId);
      const destinationPanel = _.findKey(
        state,
        (o) => o.id === destinationPanelId
      );
      const task = state[sourcePanel].content.find(
        (task) => task.taskId === taskId
      );
      if (sourcePanel === destinationPanel) {
        const newColumn = Array.from(state[destinationPanel].content);
        newColumn.splice(sourcePanelIndex, 1);
        newColumn.splice(destinationPanelIndex, 0, task);
        newState = {
          ...state,
          [destinationPanel]: {
            ...state[destinationPanel],
            content: newColumn,
          },
        };
      } else {
        const newSourceColumn = Array.from(state[sourcePanel].content);
        const newDestinationColumn = Array.from(
          state[destinationPanel].content
        );

        newSourceColumn.splice(sourcePanelIndex, 1);
        newDestinationColumn.splice(destinationPanelIndex, 0, task);

        newState = {
          ...state,
          [sourcePanel]: {
            ...state[sourcePanel],
            content: newSourceColumn,
          },
          [destinationPanel]: {
            ...state[destinationPanel],
            content: newDestinationColumn,
          },
        };
      }

      return newState;
    }

    default:
      throw new Error();
  }
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
