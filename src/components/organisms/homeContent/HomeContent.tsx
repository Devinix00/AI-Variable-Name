import HomeIntro from "@/components/molecules/HomeIntro/HomeIntro";
import styles from "./HomeContent.module.scss";
import Link from "next/link";
import DeveloperInfo from "@/components/molecules/developerInfo/DeveloperInfo";

function HomeContent(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <HomeIntro />
        <Link href="/chat" className={styles.startChatButton}>
          Start Chatting
        </Link>
        <DeveloperInfo type="home" />
      </div>
    </>
  );
}

export default HomeContent;
