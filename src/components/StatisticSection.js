import Statistics from './Statistics';
import PropTypes from 'prop-types';

export default function StatisticsSection({ items }) {
  return (
    <section>
      <h2> Upload stats </h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Statistics title={item.label} percentage={item.percentage} />
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
