import styles from "./Developer.module.scss";

interface IProps {
  division: string;
  who: string;
}

function Developer({ division, who }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.developer}>
        {division}: {who}
      </div>
    </>
  );
}

export default Developer;
