import styles from './footer.module.css';

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.Footer}>
      <span className={styles.item}>Completed Todo:{completedTodos}</span>
      <span className={styles.item}>Total Todo:{totalTodos}</span>
    </div>
  );
}