import PropTypes from 'prop-types';

import css from 'components/Transaction/Transaction.module.css';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={css.transaction}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

Transaction.prodTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
