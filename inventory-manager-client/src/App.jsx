import ProductManagement from "./pages/ProductManagement";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <main className="w-full mx-auto p-4">
        <Routes>
          <Route path="/basic-form" element={<ProductManagement />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
