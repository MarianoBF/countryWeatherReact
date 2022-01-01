import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function SearchInput() {
    return (
      <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Buscar orden:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button type="submit">Buscar</Button>
      </Form>
      </div>
    );
  }
  
  export default SearchInput;