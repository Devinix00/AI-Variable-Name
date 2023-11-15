import useChatListStore from "@/stores/useChatListStore/useChatListStore";
import ChatMessageContainer from "../chatMessageContainer/ChatMessageContainer";

function ChatContainer(): JSX.Element {
  const { chatList } = useChatListStore();

  return (
    <>
      {chatList.map((item, index) => (
        <ChatMessageContainer
          key={index}
          type={item.type}
          who={item.type === "user" ? "You" : "AI"}
          text={item.message}
        />
      ))}
    </>
  );
}

export default ChatContainer;
