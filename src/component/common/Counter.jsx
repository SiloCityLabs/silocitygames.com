import React, { useEffect, useRef, useState } from "react";

const CounterComponent = ({ parentClass, min = 0, max }) => {
  const targetElement = useRef();
  const [counted, setCounted] = useState(min);

  const startCountup = () => {
    const intervalId = setInterval(() => {
      setCounted((prevCount) => {
        const tempCount = prevCount + Math.ceil(max / 20);
        if (tempCount >= max) {
          clearInterval(intervalId);
          return max;
        }
        return tempCount;
      });
    }, 50);
  };

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCountup();
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (targetElement.current) {
      observer.observe(targetElement.current);
    }

    return () => {
      if (targetElement.current) {
        observer.unobserve(targetElement.current);
      }
    };
  }, []);

  return (
    <span ref={targetElement} className={parentClass}>
      {counted}
    </span>
  );
};

export default CounterComponent;
