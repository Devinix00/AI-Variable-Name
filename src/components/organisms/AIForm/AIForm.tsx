import TextareaField from "@/components/molecules/textareaField/TextareaField";
import styles from "./AIForm.module.scss";

interface IProps {
  scrollbar: boolean;
}

function AIForm({ scrollbar }: IProps): JSX.Element {
  const containerClass = `${styles.container} ${
    scrollbar ? styles.scrollbar : null
  }`;
  
  return (
    <>
      <form className={containerClass}>
        <TextareaField />
      </form>
    </>
  );
}

export default AIForm;
