import { signIn, useSession } from "next-auth/react";
import styles from "./styles.module.scss";

export function SubscribeButton() {
  const { data: session } = useSession();
  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    //checkoutSession 
    
    
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}