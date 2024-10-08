import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginPage: React.FC = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div>
      {isLoginView ? (
        <>
          <Login />
          <p className="px-6 text-sm text-center text-text-secondary">
            Don't have an account yet? {""}
            <button
              onClick={() => setIsLoginView(false)}
              className="hover:underline text-accent-secondary"
            >
              Sign up
            </button>
            .
          </p>
        </>
      ) : (
        <>
          <Register />
          <p className="px-6 text-sm text-center text-text-secondary">
            Already have an account?{" "}
            <button
              onClick={() => setIsLoginView(true)}
              className="hover:underline text-accent-secondary"
            >
              Sign in
            </button>
            .
          </p>
        </>
      )}
    </div>
  );
};

export default LoginPage;
