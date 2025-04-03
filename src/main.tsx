import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Typography } from "./components/Typography";
import "./index.css";

const App = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-900 light:bg-red-500 gap-8 p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Typography Examples */}
        <section className="space-y-4">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
        </section>

        <section className="space-y-4">
          <Typography variant="p" weight="light">
            Light weight paragraph text
          </Typography>
          <Typography variant="p" weight="normal">
            Normal weight paragraph text
          </Typography>
          <Typography variant="p" weight="medium">
            Medium weight paragraph text
          </Typography>
          <Typography variant="p" weight="semibold">
            Semibold weight paragraph text
          </Typography>
          <Typography variant="p" weight="bold">
            Bold weight paragraph text
          </Typography>
        </section>

        <section className="space-y-4">
          <Typography variant="p" color="primary">
            Primary text color
          </Typography>
          <Typography variant="p" color="secondary">
            Secondary text color
          </Typography>
          <Typography variant="p" color="success">
            Success text color
          </Typography>
          <Typography variant="p" color="error">
            Error text color
          </Typography>
          <Typography variant="p" color="warning">
            Warning text color
          </Typography>
          <Typography variant="p" color="info">
            Info text color
          </Typography>
        </section>
      </div>
    </main>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
