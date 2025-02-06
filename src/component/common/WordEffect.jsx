"use client";
import React, { useEffect, useRef, useState } from "react";
const stringsDemo = ["Dream Home", "Perfect Home"];
export default function WordEffect1({ strings = stringsDemo }) {
  const [activeSctingIndex, setActiveSctingIndex] = useState(0);
  useEffect(() => {
    const reapetTyping = setInterval(() => {
      setTimeout(() => {
        setActiveSctingIndex((pre) => {
          if (pre == strings.length - 1) {
            return 0;
          } else {
            return pre + 1;
          }
        });
      }, 600);
    }, 2200);

    // Cleanup function to destroy the Typed instance
    return () => {
      clearInterval(reapetTyping);
    };
  }, []);
  const parentRef = useRef(null);
  useEffect(() => {
    const updateWidth = () => {
      if (parentRef.current) {
        const widths = Array.from(parentRef.current.children).map(
          (child) => child.offsetWidth
        );
        parentRef.current.style.width = Math.max(...widths) + "px";
      }
    };

    // Initial calculation
    updateWidth();

    // Add resize event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <span className=" s1 cd-words-wrapper" ref={parentRef}>
      {strings.map((elm, i) => (
        <span
          key={i}
          className={`item-text ${
            activeSctingIndex == i ? "is-visible" : "is-hidden"
          } `}
        >
          {elm}
        </span>
      ))}
    </span>
  );
}
