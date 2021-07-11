import { useState, useEffect } from "react";

const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const goTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const resetPage = () => {
      window.scrollTo({ top: 0 });
    };

    resetPage();
  }, []);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return [scrollTop, goTop];
};

export default useScrollTop;
