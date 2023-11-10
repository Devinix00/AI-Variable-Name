import styles from "./Title.module.scss";

interface IProps {
  title: string;
  type: string;
}

function Title({ title, type }: IProps): JSX.Element {
  let titleClass;
  if (type === "home") {
    titleClass = styles.homeTitle;
  } else if (type === "chat") {
    titleClass = styles.chatTitle;
  }

  return (
    <>
      <h1 className={titleClass}>{title}</h1>
    </>
  );
}

export default Title;
