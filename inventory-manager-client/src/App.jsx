import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-amber-500 min-w-[300px] p-3">
        <h1 className="text-red-400">Helo</h1>
      </div>
    </>
  );
}

export default App;
