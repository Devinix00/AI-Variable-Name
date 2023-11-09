import HomeContent from "@/components/organisms/homeContent/HomeContent";
import styles from "./HomeTemplate.module.scss";

function HomeTemplate(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <HomeContent />
      </div>
    </>
  );
}

export default HomeTemplate;
