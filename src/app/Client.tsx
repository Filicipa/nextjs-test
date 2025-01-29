'use client'
import styles from "./page.module.css";
import {useEffect} from "react";

export default function Client() {

  useEffect(() => {
    console.log('client component', {'NEXT_PUBLIC_ENVIRONMENT': process.env.NEXT_PUBLIC_ENVIRONMENT, 'CALLBACK_URL': process.env.CALLBACK_URL})
  }, []);

  return (
      <div className={styles.description}>
        <h1>Client component</h1>
        <p>
          Environment (public env):
          <code className={styles.code}><i>{process.env.NEXT_PUBLIC_ENVIRONMENT}</i></code>
        </p>
        <p>
          Non public env:
          <code className={styles.code}><i>{process.env.CALLBACK_URL}</i></code>
        </p>
      </div>
  );
}
