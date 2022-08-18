import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

import { Transaction } from 'components/Transaction/Transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transaction-history']}>
      <thead className={css['table-head']}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction key={id} type={type} amount={amount} currency={currency} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
