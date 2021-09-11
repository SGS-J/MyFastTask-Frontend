import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskCard from "./components/TaskCard";

export default function TaskPanel({
  tasksPanel1,
  tasksPanel2,
  tasksPanel3,
  updateTaskPanel,
}) {
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    updateTaskPanel(source, destination, draggableId);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        id="task-panel"
        className="col-10 col-sm-9 row pt-5 justify-content-center"
      >
        <div
          className="col-11 col-md-4 p-1 card"
          style={{ height: "80vh", overflowY: "scroll" }}
        >
          <div className="card-header sticky-top">Important & urgent</div>
          <Droppable droppableId={tasksPanel1.id}>
            {(provided) => (
              <div
                className="card-body"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {provided.placeholder}
                {tasksPanel1.content.map((task, index) => {
                  return (
                    <TaskCard
                      key={task.taskId}
                      taskId={task.taskId}
                      title={task.title}
                      description={task.description}
                      index={index}
                    />
                  );
                })}
              </div>
            )}
          </Droppable>
        </div>

        <div
          className="col-11 col-md-4 p-1 card"
          style={{ height: "80vh", overflowY: "scroll" }}
        >
          <div className="card-header sticky-top">Urgent not important</div>
          <Droppable droppableId={tasksPanel2.id}>
            {(provided) => (
              <div
                className="card-body"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {provided.placeholder}
                {tasksPanel2.content.map((task, index) => {
                  return (
                    <TaskCard
                      key={task.taskId}
                      taskId={task.taskId}
                      title={task.title}
                      description={task.description}
                      index={index}
                    />
                  );
                })}
              </div>
            )}
          </Droppable>
        </div>

        <div
          className="col-11 col-md-4 p-1 card"
          style={{ height: "80vh", overflowY: "scroll" }}
        >
          <div className="card-header sticky-top">Important not urgent</div>
          <Droppable droppableId={tasksPanel3.id}>
            {(provided) => (
              <div
                className="card-body"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {provided.placeholder}
                {tasksPanel3.content.map((task, index) => {
                  return (
                    <TaskCard
                      key={task.taskId}
                      taskId={task.taskId}
                      title={task.title}
                      description={task.description}
                      index={index}
                    />
                  );
                })}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}
