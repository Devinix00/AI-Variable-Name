import Link from "next/link";
import styles from "./SignUpLink.module.scss";

function SignUpLink(): JSX.Element {
  return (
    <>
      <Link href="/signUpPage" className={styles.link}>
        Sign Up
      </Link>
    </>
  );
}

export default SignUpLink;
