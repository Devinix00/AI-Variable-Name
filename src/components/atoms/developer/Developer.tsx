import styles from "./Developer.module.scss";

interface IProps {
  type: string;
  division: string;
  who: string;
}

function Developer({ type, division, who }: IProps): JSX.Element {
  let devloperClass;
  if (type === "home") {
    devloperClass = styles.homeDeveloper;
  } else if (type === "chat") {
    devloperClass = styles.chatDeveloper;
  }

  return (
    <>
      <div className={devloperClass}>
        {division}: {who}
      </div>
    </>
  );
}

export default Developer;
