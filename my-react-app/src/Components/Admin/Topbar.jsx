import tob from '../../assets/Topbar.module.css'

const Topbar = () => (
  <header className={tob.topbar}>
    <input placeholder="Search properties..." />
    <div>
    <div className={tob.user}>John Doee</div>
    </div>
  </header>
);

export default Topbar;
