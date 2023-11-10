import styles from "./SignInLink.module.scss";
import Link from "next/link";

function SignInLink(): JSX.Element {
  return (
    <>
      <Link href="/signInPage" className={styles.link}>
        Sign In
      </Link>
    </>
  );
}

export default SignInLink;
