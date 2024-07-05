import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components/dashboard";

const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
      <AreaTable />
    </div>
  );
};

export default Dashboard;
