import React from "react";
import styles from "./transaction.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead className={styles.tableHeader}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, idx) => (
          <tr
            key={item.id}
            className={idx % 2 == 0 ? styles.pair : styles.noPair}
          >
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
