"use client";

import Textarea from "@/components/atoms/textarea/Textarea";
import styles from "./TextareaField.module.scss";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import useTextareaStore from "@/stores/useTextareaStore/useTextareaStore";
import useLoadingStore from "@/stores/useLoadingStore/useLoadingStore";

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
  const { isLoading } = useLoadingStore();
  const { scrollbar } = useTextareaStore();

  const disabledButton = isLoading === true || inputValue === "";
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
          disabled={disabledButton}
        >
          Send
        </Button>
      </div>
    </>
  );
}

export default TextareaField;
