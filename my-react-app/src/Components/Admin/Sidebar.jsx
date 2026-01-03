

const Sidebar = () => (
  <aside className={side.sidebar}>
    <h2>🏠 Dashboard</h2>

    <nav>
      <a className={side.active}>Overview</a>
      <a>My Propertie</a>
      <a>Sell Property</a>
      <a>Rent Property</a>
      <a>Leads</a>
      <a>Agents</a>
      <a>Settings</a>
    </nav>
  </aside>
);

export default Sidebar;
