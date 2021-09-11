import TaskCreationForm from "./components/TaskCreationForm";
import ReactDom from "react-dom";

export default function TaskCreation({
  taskTitle,
  taskDescription,
  handleChange,
  handleCreateTask,
}) {
  return (
    <>
      <button
        className="col-1 btn btn-primary d-lg-none position-fixed bottom-0 m-auto mb-4 rounded"
        data-bs-toggle="modal"
        data-bs-target="#task-creation-modal"
      >
        +
      </button>

      <div className="col-3 d-none d-lg-inline">
        <TaskCreationForm
          taskTitle={taskTitle}
          taskDescription={taskDescription}
          handleChange={handleChange}
          handleCreateTask={handleCreateTask}
        />
      </div>

      {ReactDom.createPortal(
        <div id="task-creation-modal" className="modal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create a task:</h5>
                <button
                  type="button"
                  className="btn-close d-lg-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  {" "}
                </button>
              </div>
              <div className="modal-body">
                <TaskCreationForm
                  taskTitle={taskTitle}
                  taskDescription={taskDescription}
                  handleChange={handleChange}
                  handleCreateTask={handleCreateTask}
                  modal
                />
              </div>
            </div>
          </div>
        </div>,
        document.getElementById("root")
      )}
    </>
  );
}
