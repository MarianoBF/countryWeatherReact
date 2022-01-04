import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useState } from "react";


function SearchInput({handleSearch}) {

  const [searchTerm, setSearchTerm] = useState();

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    handleSearch(searchTerm)
  };

    return (
      <div>
      <Form onSubmit={handleForm}>
        <Form.Group className="mb-3">
          <Form.Label>Buscar orden:</Form.Label>
          <Form.Control type="text" onChange={handleInput}/>
        </Form.Group>
        <Button type="submit">Buscar</Button>
      </Form>
      </div>
    );
  }
  
  export default SearchInput;