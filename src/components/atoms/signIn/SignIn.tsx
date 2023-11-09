import styles from "./SignIn.module.scss";
import Link from "next/link";

function SignIn(): JSX.Element {
  return (
    <>
      <Link href="/signInPage" className={styles.link}>
        Sign In
      </Link>
    </>
  );
}

export default SignIn;
