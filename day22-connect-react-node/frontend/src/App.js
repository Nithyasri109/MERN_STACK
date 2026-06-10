import { useState, useEffect } from "react";

const API_URL = "http://localhost:5005/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("connecting"); // connecting, connected, disconnected

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    setStatus("connecting");
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTasks(data);
      setStatus("connected");
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Failed to fetch tasks from backend. Make sure the Node server is running on port 5000!");
      setStatus("disconnected");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    // Day 22 focuses on reading/calling backend API. Adding/Deleting is Day 23 CRUD integration.
    // For now, we update local state and show a note.
    const tempTask = {
      id: Date.now(),
      title: newTask,
      isLocal: true // flag to show it's local only
    };

    setTasks([...tasks, tempTask]);
    setNewTask("");
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <p className="subtitle">Day 22: Connect React + Node (Call APIs)</p>

      {/* Connection Status Badge */}
      <div className="status-badge">
        <span className={`status-dot ${status}`}></span>
        <span>
          {status === "connected" && "Backend Connected (Port 5000)"}
          {status === "connecting" && "Connecting to Backend..."}
          {status === "disconnected" && "Backend Offline"}
        </span>
      </div>

      {/* Form */}
      <form onSubmit={handleAddTask} className="form-group">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" className="btn-add">
          Add
        </button>
      </form>

      {/* Error State */}
      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button 
            onClick={fetchTasks}
            style={{
              marginTop: "10px",
              background: "var(--color-primary)",
              color: "#0f1016",
              border: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600"
            }}
          >
            Retry Connection
          </button>
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="loading-spinner-container">
          <div className="spinner"></div>
          <p>Fetching tasks from server...</p>
        </div>
      ) : (
        /* Tasks List */
        <ul className="task-list">
          {tasks.length === 0 ? (
            <li className="empty-message">No tasks found. Try adding one!</li>
          ) : (
            tasks.map((task) => (
              <li key={task.id} className="task-item">
                <span className="task-title">{task.title}</span>
                {task.isLocal && (
                  <span className="badge-info">Day 23: CRUD API</span>
                )}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default App;