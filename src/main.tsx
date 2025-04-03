import React from "react";
import ReactDOM from "react-dom/client";
import { Typography } from "./components/Typography";
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto space-y-8">
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>

        <div className="space-y-4">
          <Typography variant="body1">
            This is a body1 text example. It's the default variant and is
            perfect for regular paragraph text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Typography>

          <Typography variant="body2">
            This is a body2 text example. It's slightly smaller than body1 and
            works well for secondary text. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Typography>

          <Typography variant="caption">
            This is a caption text example. It's perfect for small, secondary
            information like image captions or footnotes.
          </Typography>
        </div>

        <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow transition-colors duration-200">
          <Typography variant="h4" className="text-blue-600 dark:text-blue-400">
            Custom Styled Example
          </Typography>
          <Typography
            variant="body1"
            className="mt-2 text-gray-700 dark:text-gray-300"
          >
            You can combine the Typography component with additional Tailwind
            classes for custom styling. This example shows how to add custom
            colors and spacing that work in both light and dark modes.
          </Typography>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
