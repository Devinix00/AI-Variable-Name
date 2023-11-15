"use client";

import Textarea from "@/components/atoms/textarea/Textarea";
import styles from "./TextareaField.module.scss";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import useTextareaStore from "@/stores/useTextareaStore/useTextareaStore";

interface IProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

function TextareaField({
  inputValue,
  setInputValue,
  onKeyDown,
}: IProps): JSX.Element {
  const { scrollbar } = useTextareaStore();
  const buttonClass = `${styles.button} ${
    scrollbar ? styles.positionRight : null
  }`;

  return (
    <>
      <div className={styles.container}>
        <Textarea
          placeholder="what can I help you?..."
          inputValue={inputValue}
          setInputValue={setInputValue}
          onKeyDown={onKeyDown}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          className={buttonClass}
          type="submit"
        >
          Send
        </Button>
      </div>
    </>
  );
}

export default TextareaField;
