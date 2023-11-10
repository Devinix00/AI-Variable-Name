import { useEffect } from "react";

interface IProps {
  containerRef: React.RefObject<HTMLDivElement>;
  setScrollbar: (scroll: boolean) => void;
}

function useScrollbar({ containerRef, setScrollbar }: IProps) {
  useEffect(() => {
    const checkForScrollbar = (): void => {
      if (containerRef.current) {
        const hasScrollbar =
          containerRef.current.scrollHeight > containerRef.current.clientHeight;
        hasScrollbar ? setScrollbar(true) : setScrollbar(false);
      }
    };

    window.addEventListener("resize", checkForScrollbar);
    checkForScrollbar();

    return () => {
      window.removeEventListener("resize", checkForScrollbar);
    };
  }, []);
}

export default useScrollbar;
