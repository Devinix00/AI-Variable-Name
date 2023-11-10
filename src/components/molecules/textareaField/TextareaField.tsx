"use client";

import Textarea from "@/components/atoms/textarea/Textarea";
import styles from "./TextareaField.module.scss";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import useTextareaStore from "@/stores/useTextareaStore/useTextareaStore";

function TextareaField(): JSX.Element {
  const { scrollbar } = useTextareaStore();
  const buttonClass = `${styles.button} ${
    scrollbar ? styles.positionRight : null
  }`;
  
  return (
    <>
      <div className={styles.container}>
        <Textarea />
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
