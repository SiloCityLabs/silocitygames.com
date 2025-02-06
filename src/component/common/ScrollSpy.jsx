import React, { useEffect, useState } from "react";

const ScrollSpy = ({ sectionIds, activeClass = "is-current" }) => {
  const [activeSection, setActiveSection] = useState(
    sectionIds[0].replace("#", "")
  );

  useEffect(() => {
    // Create an IntersectionObserver to track visibility of sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update active section when the section is visible in the viewport
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px", // Trigger when section is 50% visible
      }
    );

    // Observe each section
    sectionIds.forEach((id) => {
      const element = document.querySelector(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Cleanup the observer when the component unmounts
      observer.disconnect();
    };
  }, [sectionIds]);

  const handleClick = (e, id) => {
    e.preventDefault();
    document
      .querySelector(id)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      {sectionIds.map((id) => (
        <li
          key={id}
          className={activeSection === id.replace("#", "") ? activeClass : ""}
        >
          <a href={id} onClick={(e) => handleClick(e, id)}>
            {id.replace("#", "").charAt(0).toUpperCase() +
              id.slice(2).split("_").join(" ")}
          </a>
        </li>
      ))}
    </>
  );
};

export default ScrollSpy;
