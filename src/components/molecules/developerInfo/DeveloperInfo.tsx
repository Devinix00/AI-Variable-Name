import Developer from "@/components/atoms/developer/Developer";
import styles from "./DeveloperInfo.module.scss";
import GithubLink from "@/components/atoms/githubLink/GithubLink";

interface IProps {
  type: string;
}

function DeveloperInfo({ type }: IProps): JSX.Element {
  let containerClass;
  let developedByClass;

  if (type === "home") {
    containerClass = styles.homeContainer;
    developedByClass = styles.homeDevelopedBy;
  } else if (type === "chat") {
    containerClass = styles.chatContainer;
    developedByClass = styles.chatDevelopedBy;
  }

  return (
    <>
      <div className={containerClass}>
        <div className={developedByClass}>Developed by</div>
        <Developer division="front" who="KitsuNeko" type={type} />
        <GithubLink type={type} url="https://github.com/KitsuNeko00" />
        <Developer division="back" who="김한규" type={type} />
        <GithubLink type={type} url="https://github.com/Star-kyu" />
      </div>
    </>
  );
}

export default DeveloperInfo;
