import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const tryRegister = async (event) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await register({ firstname, lastname, email, password });
      navigate("/books");
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <>
      <h1>Register for an account</h1>
      <form onSubmit={tryRegister}>
        <input type="text" name="firstname" required placeholder="First Name" />

        <input type="text" name="lastname" required placeholder="Last Name" />

        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
        />

        <input type="text" name="password" required placeholder="Password" />

        <button>Register</button>
        {error && <p role="alert">{error}</p>}
      </form>
      <Link to="/login">Already have an account? Log in here.</Link>
    </>
  );
};
