import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Typography } from "./components/Typography";
import { Button } from "./components/Button";

const LinksDropdown = () => (
  <Dropdown
    trigger={
      <Button variant="filled" size="md">
        <Typography variant="body1">Navigation Links</Typography>
      </Button>
    }
  >
    <div className="py-2">
      <a href="/" className="block px-4 py-2 hover:bg-gray-600">
        <Typography variant="body1">Home</Typography>
      </a>
      <a href="/about" className="block px-4 py-2 hover:bg-gray-600">
        <Typography variant="body1">About</Typography>
      </a>
      <a href="/contact" className="block px-4 py-2 hover:bg-gray-600">
        <Typography variant="body1">Contact</Typography>
      </a>
    </div>
  </Dropdown>
);

const UserMenuDropdown = () => (
  <Dropdown
    trigger={
      <Button variant="outlined" size="md">
        <Typography variant="body1">User Menu</Typography>
      </Button>
    }
  >
    <div className="p-4">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div>
          <Typography variant="h6">John Doe</Typography>
          <Typography variant="caption">john@example.com</Typography>
        </div>
      </div>
      <div className="space-y-2">
        <Button variant="text" size="md" className="w-full justify-start">
          <Typography variant="body1">Profile</Typography>
        </Button>
        <Button variant="text" size="md" className="w-full justify-start">
          <Typography variant="body1">Settings</Typography>
        </Button>
        <Button variant="text" size="md" className="w-full justify-start">
          <Typography variant="body1">Logout</Typography>
        </Button>
      </div>
    </div>
  </Dropdown>
);

const ButtonDropdown = () => (
  <Dropdown
    trigger={
      <Button
        variant="filled"
        size="md"
        className="bg-green-500 hover:bg-green-600"
      >
        <Typography variant="body1">Actions</Typography>
      </Button>
    }
  >
    <div className="py-2">
      <Button variant="text" size="md" className="w-full justify-start">
        <Typography variant="body1">Edit</Typography>
      </Button>
      <Button variant="text" size="md" className="w-full justify-start">
        <Typography variant="body1">Delete</Typography>
      </Button>
      <Button variant="text" size="md" className="w-full justify-start">
        <Typography variant="body1">Share</Typography>
      </Button>
    </div>
  </Dropdown>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Typography variant="h1">Dropdown Examples</Typography>

        <div className="space-y-4">
          <Typography variant="h3">1. Navigation Links Dropdown</Typography>
          <LinksDropdown />
        </div>

        <div className="space-y-4">
          <Typography variant="h3">2. User Menu Dropdown</Typography>
          <UserMenuDropdown />
        </div>

        <div className="space-y-4">
          <Typography variant="h3">3. Action Buttons Dropdown</Typography>
          <ButtonDropdown />
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
