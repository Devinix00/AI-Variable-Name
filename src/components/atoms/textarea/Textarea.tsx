"use client";

import React from "react";
import styles from "./Textarea.module.scss";
import useTextarea from "@/hooks/useTextarea/useTextarea";

function Textarea() {
  const { value, textareaRef, handleChange } = useTextarea();

  return (
    <textarea
      ref={textareaRef}
      className={styles.textarea}
      value={value}
      onChange={handleChange}
    />
  );
}

export default Textarea;
