const TransactionHistory = ({ currency, amount, type }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};
export default TransactionHistory;
