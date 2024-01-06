const { useState, useEffect } = require("react");

export const useProximity = (id) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elementPosition = document
        .querySelector(`#${id}`)
        .getBoundingClientRect().top;

      const windowHeight = window.innerHeight;

      console.log(elementPosition);

      if (elementPosition < windowHeight * 0.5) {
        setShouldAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { shouldAnimate };
};
