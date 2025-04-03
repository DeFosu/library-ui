import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Dropdown } from "./components/Dropdown";

const App = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const singleOptions = [
    { title: "First Option", value: "option1" },
    { title: "Second Option", value: "option2" },
    { title: "Third Option", value: "option3" },
    { title: "Third Option", value: "option4" },
    { title: "Third Option", value: "option5" },
    { title: "Third Option", value: "option6" },
    { title: "Third Option", value: "option7" },
    { title: "Third Option", value: "option8" },
    { title: "Third Option", value: "option9" },
  ];

  const multiOptions = [
    { title: "Option Alpha", value: "alpha" },
    { title: "Option Beta", value: "beta" },
    { title: "Option Gamma", value: "gamma" },
  ];

  const handleSingleSelect = (value: string) => {
    setSelectedOption(value);
    console.log("Selected option:", value);
  };

  const handleMultiSelect = (value: string) => {
    setSelectedOptions((prev) => {
      const newSelection = prev.includes(value)
        ? prev.filter((opt) => opt !== value)
        : [...prev, value];
      console.log("Selected options:", newSelection);
      return newSelection;
    });
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen dark:bg-gray-900 light:bg-red-500 gap-8 p-4 text-gray-300">
      <div className="w-64">
        <h2 className="text-xl font-bold mb-4">Single Select Dropdown</h2>
        <Dropdown
          options={singleOptions}
          selected={selectedOption}
          onSelect={handleSingleSelect}
          placeholder="Select an option"
        />
        <p className="mt-2">Selected: {selectedOption}</p>
      </div>

      <div className="w-64">
        <h2 className="text-xl font-bold mb-4">Multi Select Dropdown</h2>
        <Dropdown
          options={multiOptions}
          selected={selectedOptions}
          onSelect={handleMultiSelect}
          multiple
          placeholder="Select options"
        />
        <p className="mt-2">Selected: {selectedOptions.join(", ")}</p>
      </div>
    </main>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
