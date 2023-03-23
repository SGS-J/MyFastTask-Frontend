import _ from "lodash";

function* generateId() {
  let id = 100;
  while (true) {
    yield String(id++);
  }
}

const idGenerator = generateId();

export default function tasksReducer(state, action) {
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
}
