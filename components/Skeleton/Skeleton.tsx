import styles from "./Skeleton.module.css"

export default function Skeleton() {
  return (
    <div className={styles.card} style={{ "--skeleton-color": "#1D2739" } as React.CSSProperties}>
      <div className={styles.header}>
        <div className={styles.avatar} />
        <div className={styles.headerLines}>
          <div className={styles.block} style={{ width: "70%" }} />
          <div className={styles.block} style={{ width: "50%" }} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.block} style={{ width: "100%" }} />
        <div className={styles.block} style={{ width: "100%" }} />
        <div className={styles.block} style={{ width: "55%" }} />
      </div>
    </div>
  )
}
