import Nav from "react-bootstrap/Nav";

function Sidebar() {
  return (
    <div>
      <h3>Buscar</h3>
      <Nav variant="pills" activeKey="/" defaultActiveKey="/" className="flex-column">
        <Nav.Link eventKey="link-0" href="/">Buscar por región</Nav.Link>
        <Nav.Link eventKey="link-1" href="/capital">Buscar por capital</Nav.Link>
        <Nav.Link eventKey="link-2" href="/limitrofes">Buscar limítrofes</Nav.Link>
        <Nav.Link eventKey="link-3" href="/pais">Buscar país</Nav.Link>
        <Nav.Link eventKey="link-4" href="/banderas">Listar banderas</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
