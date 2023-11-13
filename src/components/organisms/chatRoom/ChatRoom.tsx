import Title from "@/components/atoms/title/Title";
import styles from "./ChatRoom.module.scss";
import ChatMessageContainer from "@/components/molecules/chatMessageContainer/ChatMessageContainer";

function ChatRoom(): JSX.Element {
  return (
    <>
      <Title title="AI Naming Service!" type="chat" />
      <div className={styles.container}>
        <ChatMessageContainer
          type="ai"
          who="AI"
          text="Hello! What can I help you?"
        />
        <ChatMessageContainer
          type="user"
          who="you"
          text="로그인 기능을 담당하는 커스텀 훅의 이름을 지어줘"
        />
        <ChatMessageContainer
          type="ai"
          who="AI"
          text="useUserAuthentication, useLoginControl, useAuthManager, useSignIn, useCredentialVerifier"
        />
      </div>
    </>
  );
}

export default ChatRoom;
