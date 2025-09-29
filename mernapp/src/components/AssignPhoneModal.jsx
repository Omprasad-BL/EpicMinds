import { useState } from "react";
import { assignAdditionalPhone } from "../api/phoneApi";

const AssignPhoneModal = ({ user, onClose }) => {
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    await assignAdditionalPhone(user._id, phone);
    onClose();
    window.location.reload(); // simple refresh to show changes
  };

  return (
    <div className="modal">
      <h3>Assign Additional Phone to {user.name}</h3>
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <button onClick={handleSubmit}>Assign</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AssignPhoneModal;
