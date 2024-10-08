import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/register`,
        {
          email,
          password,
        }
      );
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-background-primary text-text-primary">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Register</h1>
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
            <label htmlFor="password" className="text-sm text-text-secondary">
              Password
            </label>
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
          <div>
            <label
              htmlFor="confirmPassword"
              className="text-sm text-text-secondary"
            >
              Re-Enter Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
