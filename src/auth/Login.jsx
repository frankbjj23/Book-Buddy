import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const tryLogin = async (formData) => {
    setError(null);

    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await login({ email, password });
      navigate("/books");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1>Log in to your account</h1>
      <form action={tryLogin}>
        <input type="email" name="email" required placeholder="Email" />
        <input type="text" name="password" required placeholder="Password" />
        <button>Login</button>
        {error && <p role="alert">{error}</p>}
      </form>
      <Link to="/register">Need an account? Register here.</Link>
    </>
  );
};
