import styles from "./Description.module.scss";

interface IProps {
  description: string;
}

function Description({ description }: IProps): JSX.Element {
  return (
    <>
      <p className={styles.description}>{description}</p>
    </>
  );
}

export default Description;
