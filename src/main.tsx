import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Button } from "./components/Button/Button";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-200">
      <Button>Click me</Button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
