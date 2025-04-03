import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToggleContainer } from "./components/Toggle";

const App = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const singleOptions = [
    { title: "First Option", value: "option1" },
    { title: "Second Option", value: "option2" },
    { title: "Third Option", value: "option3" },
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
      <ToggleContainer
        options={singleOptions}
        selected={selectedOption}
        onSelect={handleSingleSelect}
      >
        Single Select Toggle
      </ToggleContainer>
      <p>Selected: {selectedOption}</p>

      <ToggleContainer
        options={multiOptions}
        selected={selectedOptions}
        onSelect={handleMultiSelect}
        multiple
      >
        Multi Select Toggle
      </ToggleContainer>
      <p>Selected: {selectedOptions.join(", ")}</p>
    </main>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
