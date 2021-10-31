import TransactionHistory from './TransactionHistory';
import s from './Transaction.module.css';

export default function TransactionSection({ items }) {
  return (
    <table className={s.section}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={s.data} key={item.id}>
            <TransactionHistory
              currency={item.currency}
              amount={item.amount}
              type={item.type}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
