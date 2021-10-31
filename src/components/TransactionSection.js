import TransactionHistory from './TransactionHistory';

export default function TransactionSection({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
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
