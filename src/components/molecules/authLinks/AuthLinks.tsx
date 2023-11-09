import SignIn from "@/components/atoms/signIn/SignIn";
import styles from "./AuthLinks.module.scss";
import SignUp from "@/components/atoms/signUp/SignUp";

function AuthLinks(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <SignIn />
        <SignUp />
      </div>
    </>
  );
}

export default AuthLinks;
