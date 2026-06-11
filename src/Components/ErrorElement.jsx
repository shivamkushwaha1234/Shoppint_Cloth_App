import { useRouteError, NavLink } from "react-router-dom";
//import "./ErrorElement.css";

const ErrorElement = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="error-container">
      <div className="error-card">
        <h1>Oops!</h1>
        <h2>Something went wrong</h2>

        <p className="error-message">
          {err?.statusText || err?.message || "Unexpected Error"}
        </p>

        <NavLink to="/" className="home-btn">
          Go Back Home
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorElement;