import Link from "next/link";
import styles from "./GithubLink.module.scss";

interface IProps {
  type: string;
  url: string;
}

function GithubLink({ type, url }: IProps): JSX.Element {
  return (
    <>
      {type === "home" ? (
        <Link href={url} target="_BLANK" className={styles.link}>
          {url}
        </Link>
      ) : null}
    </>
  );
}

export default GithubLink;
