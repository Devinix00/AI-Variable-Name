"use client";

import TextareaField from "@/components/molecules/textareaField/TextareaField";
import styles from "./AIForm.module.scss";
import { useState } from "react";
import useTextarea from "@/hooks/useTextarea/useTextarea";
import useSubmit from "@/hooks/useSubmit/useSubmit";
import SelectCase from "@/components/molecules/selectCase/SelectCase";
import usePressEnter from "@/hooks/usePressEnter/usePressEnter";
import DeveloperInfo from "@/components/molecules/developerInfo/DeveloperInfo";

interface IProps {
  scrollbar: boolean;
}

function AIForm({ scrollbar }: IProps): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const [option, setOption] = useState("camelCase");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  useTextarea({ inputValue, setInputValue });

  const { handleSubmit } = useSubmit({
    inputValue,
    setInputValue,
    option,
    setOption,
  });

  const { handleKeyPress } = usePressEnter({
    inputValue,
    setInputValue,
    option,
    setOption,
  });

  const containerClass = `${styles.container} ${
    scrollbar ? styles.scrollbar : null
  }`;

  return (
    <>
      <form onSubmit={handleSubmit} className={containerClass}>
        <SelectCase
          option={option}
          setOption={setOption}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
        <TextareaField
          inputValue={inputValue}
          setInputValue={setInputValue}
          onKeyDown={handleKeyPress}
        />
        <DeveloperInfo type="chat" />
      </form>
    </>
  );
}

export default AIForm;
