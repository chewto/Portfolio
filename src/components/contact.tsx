import "./styles/styles.css";
import { useState } from "react";

export const Contact: React.FC = () => {
  const copyClip = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <span className="contact-info">
        Email:
        <button onClick={() => copyClip("jesuselozada@gmail.com")}>
          jesuselozada@gmail.com
        </button>
      </span>
      <span className="contact-info">
        Phone:
        <button onClick={() => copyClip("+58 4265826073")}>
          +58 4265826073
        </button>
      </span>
    </>
  );
};
