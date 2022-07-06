import { React } from "react";
import PropTypes from "prop-types";
const Statistics = (props) => {
  let { title, stats } = props;
  return (
    <section className="statistics">
      {title && <h2 className="title">{props.title}</h2>}

      <ul className="stat-list">
        {stats.map((stat) => (
          <li key={stat.id} className="item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
