import Title from "@/components/atoms/title/Title";
import styles from "./ChatRoom.module.scss";

function ChatRoom(): JSX.Element {
  return (
    <>
      <Title title="AI Naming Service!" type="chat" />
      <div className={styles.container}></div>
    </>
  );
}

export default ChatRoom;
