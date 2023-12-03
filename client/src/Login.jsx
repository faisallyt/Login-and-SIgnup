import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center bg-gray-600 h-screen">
      <div className="bg-white p-12 rounded w-50">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              <strong className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">
              <strong className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-[10px] bg-yellow-500 mt-4">
            Log in
          </button>
          <p className="text-[12px] mt-1">New User ?</p>
        </form>
        <Link
          to="/signup"
          className="w-full block text-center rounded-[10px] bg-yellow-500 mt-4">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Signup;
