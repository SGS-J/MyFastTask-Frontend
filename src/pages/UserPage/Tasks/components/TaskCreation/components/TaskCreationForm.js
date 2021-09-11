export default function TaskCreationForm({
  taskTitle,
  taskDescription,
  handleChange,
  handleCreateTask,
  modal,
}) {
  return (
    <form className="p-3 p-lg-5">
      <h5>Create your task:</h5>
      <label className="form-label">Title:</label>
      <input
        type="text"
        name="task-title"
        className="form-control"
        value={taskTitle}
        onChange={(e) => handleChange("title", e.target.value)}
      />
      <label className="form-label">Description:</label>
      <textarea
        name="task-desc"
        className="form-control"
        value={taskDescription}
        onChange={(e) => handleChange("description", e.target.value)}
      >
        {" "}
      </textarea>
      <button
        className="btn btn-primary mt-3"
        disabled={!taskTitle}
        onClick={handleCreateTask}
        data-bs-dismiss={modal && "modal"}
      >
        Add
      </button>
    </form>
  );
}
