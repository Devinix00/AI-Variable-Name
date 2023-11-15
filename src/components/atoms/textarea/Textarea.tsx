"use client";

import React from "react";
import styles from "./Textarea.module.scss";
import useTextarea from "@/hooks/useTextarea/useTextarea";

interface IProps {
  placeholder: string;
  inputValue: string;
  setInputValue: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

function Textarea({
  placeholder,
  inputValue,
  setInputValue,
  onKeyDown,
}: IProps): JSX.Element {
  const { textareaRef, handleChange } = useTextarea({
    inputValue,
    setInputValue,
  });

  return (
    <textarea
      ref={textareaRef}
      className={styles.textarea}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default Textarea;
