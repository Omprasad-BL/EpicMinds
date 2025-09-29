import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getAllUsers } from "../api/userApi";
import UserRow from "./UserRow";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  if (!user) return <p>Please login to access the dashboard.</p>;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Additional Phone</th>
            <th>Projects</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => <UserRow key={u._id} user={u} />)}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
