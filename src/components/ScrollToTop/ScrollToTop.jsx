import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import styles from "./ScrollToTop.module.css";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 2.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <button
      className={`${styles.scrollToTopBtn} ${isVisible ? styles.show : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 19V5M12 5L5 12M12 5L19 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
