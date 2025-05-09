// src/ui/button.tsx
import React, { ReactNode } from "react";

// Define the type for Button's props
interface ButtonProps {
  children: ReactNode; // Allows any valid React node as children (text, elements, etc.)
  onClick?: () => void; // Optional onClick function
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};
