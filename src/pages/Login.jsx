import { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/users/login", form);

      console.log(res.data);

      // Save user (simple version)
      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Login successful ✅");

      // redirect later
    } catch (err) {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg mb-3"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-4"
          onChange={handleChange}
          required
        />

        <button className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600">
          Login
        </button>
      </form>

    </div>
  );
}

export default Login;