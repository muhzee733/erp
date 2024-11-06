import { Container } from 'reactstrap';
import Widgets from './widgets';

export function Dashboard() {
  document.title = "Dashboard | ERP";
  return (
    <div className="page-content">
      <Container fluid>
        <Widgets />
      </Container>
    </div>
  );
}

export default Dashboard;
