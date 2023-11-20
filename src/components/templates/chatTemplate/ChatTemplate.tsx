"use client";

import styles from "./ChatTemplate.module.scss";
import AIForm from "@/components/organisms/AIForm/AIForm";
import { useRef, useState } from "react";
import useScrollbar from "@/hooks/useScrollbar/useScrollbar";
import ChatRoom from "@/components/organisms/chatRoom/ChatRoom";

function ChatTemplate(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollbar, setScrollbar] = useState<boolean>(false);
  useScrollbar({ containerRef, setScrollbar });

  return (
    <>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.wrapper}>
          <ChatRoom />
        </div>
        <AIForm scrollbar={scrollbar} />
      </div>
    </>
  );
}

export default ChatTemplate;
