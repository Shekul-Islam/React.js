import React from 'react';
import AddCustomer from './AddCustomer';
import CustomerList from './CustomerList';

const Dashboard = () => {
    return (
        <div>
            <AddCustomer/>
            <CustomerList/>
        </div>
    );
};

export default Dashboard;