import dash   from "../../assets/maindash.module.css";

const StatCard = ({ title, value }) => (
  <div className={dash.card}>
    <h4>{title}</h4>
    <h2>{value}</h2>
  </div>
);

export default StatCard;
