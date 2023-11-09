import styles from "./Title.module.scss";

interface IProps {
  title: string;
}

function Title({ title }: IProps): JSX.Element {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
    </>
  );
}

export default Title;
