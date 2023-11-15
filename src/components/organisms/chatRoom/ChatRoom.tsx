import Title from "@/components/atoms/title/Title";
import styles from "./ChatRoom.module.scss";
import ChatMessageContainer from "@/components/molecules/chatMessageContainer/ChatMessageContainer";
import ChatContainer from "@/components/molecules/chatContainer/ChatContainer";

function ChatRoom(): JSX.Element {
  return (
    <>
      <Title title="AI Naming Service!" type="chat" />
      <div className={styles.container}>
        <ChatMessageContainer type="initialAi" who="AI" />
        <ChatContainer />
      </div>
    </>
  );
}

export default ChatRoom;
