import { useState } from "react";
import AssignPhoneModal from "./AssignPhoneModal";
import AssignProjectModal from "./AssignProjectModal";

const UserRow = ({ user }) => {
  const [showPhone, setShowPhone] = useState(false);
  const [showProject, setShowProject] = useState(false);

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.additionalPhone?.phoneNumber || "-"}</td>
      <td>
        {user.projects?.map(p => p.name).join(", ") || "-"}
      </td>
      <td>
        <button onClick={() => setShowPhone(true)}>Add Phone</button>
        <button onClick={() => setShowProject(true)}>Assign Project</button>
      </td>

      {showPhone && (
        <AssignPhoneModal user={user} onClose={() => setShowPhone(false)} />
      )}
      {showProject && (
        <AssignProjectModal user={user} onClose={() => setShowProject(false)} />
      )}
    </tr>
  );
};

export default UserRow;
