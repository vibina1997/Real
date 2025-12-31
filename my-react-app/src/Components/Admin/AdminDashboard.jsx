import StatCard from "./StatCard";
import PropertyTable from "./PropertyTable";
import dash from '../../assets/maindash.module.css';

const AdminDashboard = () => (
  <>
    <div className={dash.cards}>
      <StatCard title="Total Properties" value="125" />
      <StatCard title="For Sale" value="58" />
      <StatCard title="For Rent" value="42" />
      <StatCard title="New Leads" value="18" />
    </div>

    <PropertyTable />
  </>
);

export default AdminDashboard;
