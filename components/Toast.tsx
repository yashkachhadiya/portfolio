"use client";
import { useEffect, useState } from "react";

export default function Toast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShow(true);
      setTimeout(() => setShow(false), 4000);
    };

    document.addEventListener("show-toast", handler);
    return () => document.removeEventListener("show-toast", handler);
  }, []);

  return <div className={`toast ${show ? "show" : ""}`}>Message sent!</div>;
}
