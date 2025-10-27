// app.jsx
// import { Link, Route, Routes } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <nav className="bg-white shadow p-4 flex gap-4">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link to="/basic-form" className="text-blue-600 hover:underline">
          Basic Form
        </Link>
        <Link to="/hook-form" className="text-blue-600 hover:underline">
          Hook Form
        </Link>
      </nav>

      <main className="w-full mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
