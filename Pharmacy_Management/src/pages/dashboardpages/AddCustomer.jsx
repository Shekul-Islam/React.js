import React from 'react';
import Sidebar from '../../components/Sidebar';

const AddCustomer = () => {
    return (
        <div>
            <Sidebar/>
            <nav>
        <ul>
          <li>
            <p>Add Customer</p>
          </li>
          <li>
            <p>Customer List</p>
          </li>
          <li>
            <p>Customer Ledger</p>
          </li>
        </ul>
      </nav>

        </div>
    );
};

export default AddCustomer;