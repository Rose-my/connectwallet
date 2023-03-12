import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginChild} />
      <div className={styles.component1}>
        <div className={styles.component1Inner}>
          <div className={styles.instanceChild} />
        </div>
        <div className={styles.connectWallet}>Connect Wallet</div>
      </div>
      <div className={styles.theEasiestWay}>
        The easiest way to get eco-NFT!
      </div>
      <img className={styles.frameIcon} alt="" src="/frame1.svg" />
    </div>
  );
};

export default Login;
