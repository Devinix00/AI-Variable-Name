import HomeIntro from "@/components/molecules/HomeIntro/HomeIntro";
import styles from "./HomeContent.module.scss";
import Link from "next/link";
import AuthLinks from "@/components/molecules/authLinks/AuthLinks";

function HomeContent(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <HomeIntro />
        <Link href="/chat" className={styles.startChatButton}>
          Start Chatting
        </Link>
        <AuthLinks />
      </div>
    </>
  );
}

export default HomeContent;
