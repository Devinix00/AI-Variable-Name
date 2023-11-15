import Developer from "@/components/atoms/developer/Developer";
import styles from "./DeveloperInfo.module.scss";

function DeveloperInfo(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.developedBy}>Developed by</div>
        <Developer division="front" who="KitsuNeko" />
        <Developer division="back" who="김한규" />
      </div>
    </>
  );
}

export default DeveloperInfo;
