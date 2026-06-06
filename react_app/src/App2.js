import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hello " + name);
  };

  return (
    <div>
      <h1>Form Handling</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;