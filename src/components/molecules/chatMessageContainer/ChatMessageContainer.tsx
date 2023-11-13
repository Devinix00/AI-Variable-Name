import styles from "./ChatMessageContainer.module.scss";

interface IProps {
  type: string;
  who: string;
  text: string;
}

function ChatMessageContainer({ type, who, text }: IProps): JSX.Element {
  let chatClass;
  if (type === "user") {
    chatClass = styles.userContainer;
  } else if (type === "ai") {
    chatClass = styles.aiContainer;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={chatClass}>
          <div className={styles.userImage}>{who}</div>
          <div className={styles.messageContainer}>
            <div className={styles.message}>{text}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatMessageContainer;
