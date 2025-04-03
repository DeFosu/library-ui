import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Modal } from "./components/Modal";

const App = () => {
  const [isSimpleModalOpen, setIsSimpleModalOpen] = useState(false);
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center h-screen dark:bg-gray-900 light:bg-red-500 gap-8 p-4 text-gray-300">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={() => setIsSimpleModalOpen(true)}
      >
        Open Simple Modal
      </button>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={() => setIsContentModalOpen(true)}
      >
        Open Modal with Content
      </button>

      <Modal
        isOpen={isSimpleModalOpen}
        onClose={() => setIsSimpleModalOpen(false)}
      />

      <Modal
        isOpen={isContentModalOpen}
        onClose={() => setIsContentModalOpen(false)}
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Modal Content
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            This is some content inside the modal. You can put any React
            component here.
          </p>
          <div className="mt-4 flex justify-end">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => setIsContentModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
