import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <aside>
      <NavLink to="/" className={"brand-link"}>
        <span>Dashboard</span>
      </NavLink>
    </aside>
  );
};

export default Dashboard;
