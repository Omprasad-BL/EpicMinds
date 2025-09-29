import { useState } from "react";
import { assignProject } from "../api/projectApi";

const AssignProjectModal = ({ user, onClose }) => {
  const [projectName, setProjectName] = useState("");

  const handleSubmit = async () => {
    await assignProject(user._id, projectName);
    onClose();
    window.location.reload();
  };

  return (
    <div className="modal">
      <h3>Assign Project to {user.name}</h3>
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={e => setProjectName(e.target.value)}
      />
      <button onClick={handleSubmit}>Assign</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AssignProjectModal;
