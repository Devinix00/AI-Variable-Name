import Link from "next/link";
import styles from "./SignUp.module.scss";

function SignUp(): JSX.Element {
  return (
    <>
      <Link href="/signUpPage" className={styles.link}>
        Sign Up
      </Link>
    </>
  );
}

export default SignUp;
