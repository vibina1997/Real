import tob from '../../assets/topbar.module.css';

const Topbar = () => (
  <header className={tob.topbar}>
    <input placeholder="Search properties..." />
    <div className={tob.user}>John Doe</div>
  </header>
);

export default Topbar;
