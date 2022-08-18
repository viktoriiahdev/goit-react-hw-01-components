import PropTypes from 'prop-types'
import { randomColor } from 'utils'

import css from 'components/StatItem/StatItem.module.css';

export const StatItem = ({ label, percentage }) => {
    const bgColor = randomColor();
    return (
        <li className={css.item} style={{ backgroundColor:  bgColor}}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
    )
}


StatItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}