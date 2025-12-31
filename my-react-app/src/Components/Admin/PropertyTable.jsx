import table from '../../assets/table.module.css';

const PropertyTable = () => (
  <div className={table.box}>
    <h3>My Properties</h3>

    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Price</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2 BHK Apartment</td>
          <td>For Sale</td>
          <td>₹45,00,000</td>
          <td>Active</td>
          <td>Edit | Delete</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PropertyTable;
