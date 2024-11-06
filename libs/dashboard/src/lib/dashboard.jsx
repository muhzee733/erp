import { Container } from 'reactstrap';

export function Dashboard() {
  document.title = "Dashboard | ERP";
  return (
    <div className="page-content">
      <Container fluid>
        <h3>Dashboard</h3>
      </Container>
    </div>
  );
}

export default Dashboard;
