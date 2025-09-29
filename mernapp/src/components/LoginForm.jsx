import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../api/userApi";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await loginUser(email, password);
    if (user) {
      login(user);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-form">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
};

export default LoginForm;
