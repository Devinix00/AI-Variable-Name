import SignInLink from "@/components/atoms/signInLink/SignInLink";
import styles from "./AuthLinks.module.scss";
import SignUpLink from "@/components/atoms/signUpLink/SignUpLink";

function AuthLinks(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <SignInLink />
        <SignUpLink />
      </div>
    </>
  );
}

export default AuthLinks;
