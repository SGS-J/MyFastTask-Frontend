import { Draggable } from "react-beautiful-dnd";

export default function TaskCard({ taskId, title, description, index }) {
  return (
    <Draggable draggableId={taskId} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="card mb-3"
        >
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
}
