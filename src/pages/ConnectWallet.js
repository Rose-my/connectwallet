import styles from "./ConnectWallet.module.css";

const ConnectWallet = () => {
  return (
    <div className={styles.connectWallet}>
      <img className={styles.backIcon} alt="" src="/back@2x.png" />
      <div className={styles.component1}>
        <div className={styles.component1Inner}>
          <div className={styles.instanceChild} />
        </div>
        <div className={styles.connectWallet1}>Connect Wallet</div>
      </div>
      <div className={styles.selectYourSolana}>Select your Solana wallet</div>
      <div className={styles.moreWalletsParent}>
        <div className={styles.moreWallets}>More Wallets..</div>
        <img className={styles.frameChild} alt="" src="/frame-427318859.svg" />
      </div>
      <div className={styles.braveParent}>
        <div className={styles.brave}>Brave</div>
        <div className={styles.frameItem} />
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameItem} />
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
        <div className={styles.trustWallet}>Trust Wallet</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameItem} />
        <img className={styles.frameChild1} alt="" src="/frame-427318853.svg" />
        <div className={styles.phantom}>Phantom</div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameItem} />
        <div className={styles.zelcore}>Zelcore</div>
        <img className={styles.frameIcon} alt="" src="/zelcore-1.svg" />
      </div>
      <div className={styles.connectWalletChild} />
      <img className={styles.solanaPayMark} alt="" src="/solana-pay-mark.svg" />
    </div>
  );
};

export default ConnectWallet;
