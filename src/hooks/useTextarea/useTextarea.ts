import useTextareaStore from "@/stores/useTextareaStore/useTextareaStore";
import React, { useRef, useEffect } from "react";

interface IUseTextarea {
  inputValue: string;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

interface IProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}

function useTextarea({ inputValue, setInputValue }: IProps): IUseTextarea {
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
  }, [inputValue]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setInputValue(e.target.value);
  };

  return { inputValue, textareaRef, handleChange };
}

export default useTextarea;
