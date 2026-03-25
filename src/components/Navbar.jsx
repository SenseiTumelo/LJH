import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">

      {/* Logo / Brand */}
      <Link to="/" className="text-xl font-bold text-green-600">
        <img src="/logo.svg" alt="Moletjie Logo" className="h-10 w-auto" />
      </Link>

      {/* Links */}
      <div className="flex items-center gap-4">

        <Link to="/" className="text-gray-600 hover:text-green-600">
          Home
        </Link>

        <Link to="/postJob" className="text-gray-600 hover:text-green-600">
          Post Job
        </Link>

        {!user ? (
          <Link
            to="/login"
            className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600"
          >
            Login
          </Link>
        ) : (
          <span className="text-gray-700 font-medium">
            Hi, {user.name}
          </span>
        )}

      </div>
    </nav>
  );
}

export default Navbar;