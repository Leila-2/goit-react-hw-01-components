import s from '../Statistics/Statistics.module.css';
export default function Statistics({ title, percentage, color }) {
  return (
    <div className={s.container} style={{ backgroundColor: color }}>
      <span className={s.title}>{title} </span>
      <span className={s.percentage}>{percentage}</span>
    </div>
  );
}
