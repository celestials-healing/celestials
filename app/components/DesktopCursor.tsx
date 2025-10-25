"use client"; // make this a client component
import { useEffect, useState } from "react";
import Cursor from "./cursor";

export default function DesktopCursor() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check screen width after mount
    const handleResize = () => setIsDesktop(window.innerWidth >= 768); // adjust breakpoint as needed
    handleResize(); // check initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isDesktop) return null;
  return <Cursor />;
}
