import styles from "./ChatMessageContainer.module.scss";

interface IProps {
  type: string;
  who: string;
  text?: string | string[];
  isLoading?: boolean;
}

function ChatMessageContainer({
  type,
  who,
  text,
  isLoading,
}: IProps): JSX.Element {
  let chatClass;
  let content;

  if (type === "user") {
    chatClass = styles.userContainer;
    content = text;
  } else if (type === "initialAi") {
    chatClass = styles.aiContainer;
    content = "Hello! what can I help you?";
  } else if (type === "ai") {
    chatClass = styles.aiContainer;
    if (isLoading) {
      content = "Please wait for AI&#39;s reply...";
    } else if (Array.isArray(text)) {
      content = text.map((aiText, index) => <div key={index}>{aiText}</div>);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={chatClass}>
          <div className={styles.userImage}>{who}</div>
          <div className={styles.messageContainer}>
            <div className={styles.message}>{content}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatMessageContainer;
