import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

function Sidebar() {

  return (
    <div>
      <h3>Buscar</h3>
      <Nav variant="tabs" className="flex-column">
        <LinkContainer to="/region">
          <Nav.Link>Buscar por región</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/capital">
          <Nav.Link>Buscar por capital</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/limitrofes">
          <Nav.Link>Buscar limítrofes</Nav.Link>
        </LinkContainer>{" "}
        <LinkContainer to="/pais">
          <Nav.Link>Buscar país</Nav.Link>
        </LinkContainer>{" "}
        <LinkContainer to="/banderas">
          <Nav.Link>Listar banderas</Nav.Link>
        </LinkContainer>
      </Nav>
    </div>
  );
}

export default Sidebar;
