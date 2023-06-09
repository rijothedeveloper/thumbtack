import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
    </div>
  );
}

export default App;
