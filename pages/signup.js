import styles from "../styles/Home.module.css";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <Head>
        <title>SneakyLegs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../images/icon.png" />
      </Head>
      <div className={styles.login__container}>
        <div className={styles.bg__img}>
          <img
            src="https://images.unsplash.com/photo-1581619714043-c1289ada25f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
        <h1></h1>
        <div className={styles.Signin}>
          <div className={styles.signin__details}>
            <p>Enter your credentials to make payments</p>
            <div className={styles.email}>
              <p>Email address</p>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.email}>
              <p>Name</p>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div className={styles.button__section}>
            <button>Sign in</button>
            <p>
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
