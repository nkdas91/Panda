import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (scrollTop / docHeight) * 100;

      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll(); // init

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="left-0 z-50 h-2 w-full">
      <div
        className="h-full bg-primary origin-left"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
