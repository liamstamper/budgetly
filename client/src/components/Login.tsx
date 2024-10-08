import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        { email, password }
      );
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error) && error.response) {
        setError(
          "Failed to login. Please check your credentials and try again."
        );
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="flex flex-col max-w-lg w-full p-6 rounded-md sm:p-10 bg-background-primary text-text-primary">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm text-text-secondary">
          Sign in to access your account
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-text-secondary"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              className="w-full px-3 py-2 border rounded-md border-border bg-background-secondary text-text-primary"
              required
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm text-text-secondary">
                Password
              </label>
              <a
                href="#"
                className="text-xs hover:underline text-text-secondary"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*********"
              className="w-full px-3 py-2 border rounded-md border-border bg-background-secondary text-text-primary"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-accent-primary text-background-primary"
            >
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
