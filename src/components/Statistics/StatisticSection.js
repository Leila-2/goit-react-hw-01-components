import Statistics from './Statistics';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function StatisticsSection({ items }) {
  return (
    <section className={s.section}>
      <h2 className={s.header}> Upload stats </h2>
      <ul className={s.list}>
        {items.map(item => (
          <li key={item.id}>
            <Statistics
              title={item.label}
              percentage={item.percentage}
              color={item.color}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticsSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
