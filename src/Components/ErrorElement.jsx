import { useRouteError, NavLink } from "react-router-dom";

const ErrorElement = () => {
  const err = useRouteError();

  return (
    <div className="error-container">
      <div className="error-card">
        <h1>{err?.status || "404"}</h1>

        <h2>
          {err?.status === 404
            ? "Page Not Found"
            : "Something Went Wrong"}
        </h2>

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