import useTextareaStore from "@/stores/useTextareaStore/useTextareaStore";
import React, { useRef, useEffect, useState } from "react";

interface IUseTextarea {
  value: string;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function useTextarea(): IUseTextarea {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { setScrollbarTrue, setScrollbarFalse } = useTextareaStore();

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;

      if (textarea.scrollHeight > 200) {
        textarea.style.overflowY = "scroll";
        setScrollbarTrue();
      } else {
        textarea.style.overflowY = "hidden";
        setScrollbarFalse();
      }
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  };

  return { value, textareaRef, handleChange };
}

export default useTextarea;
