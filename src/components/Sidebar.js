import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { useState } from "react";

function Sidebar() {
  const [active, setActive] = useState("aa");

  return (
    <div>
      <h3>Buscar {active}</h3>
      <Nav
        variant="tabs"
        activeKey={active}
        className="flex-column"
        onSelect={(selectedKey) => {
          console.log(selectedKey);
          setActive(selectedKey);
        }}
      >
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
