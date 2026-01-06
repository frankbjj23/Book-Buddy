import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <a href="/" className="logo">
        <img src="/books.png" alt="Book Buddy Logo" width="40" height="40" />
        <p>Book Buddy</p>
      </a>
      <nav>
        <NavLink to="/books" className="nav-link">
          Books
        </NavLink>
        <NavLink to="/account" className="nav-link">
          Account
        </NavLink>
        {/* {token ? (
          <a onClick={() => logout()}>Log out</a>
        ) : (
          <>
            <NavLink to="register">Register</NavLink>
            <NavLink to="login">Log in</NavLink>
          </>
        )} */}
      </nav>
    </header>
  );
};
