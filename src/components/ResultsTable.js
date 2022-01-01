import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

function ResultsTable({seedData}) {

    const [tableData, setTableData] = useState([])

    useEffect(()=> {
    setTableData(
        seedData.map((item)=>(
        <tr key={item.name.common}>
            <td></td>
            <td>{item.name.common}</td>
            <td><img className="miniFlag" src={item.flags.svg} alt={item.name.common} /></td>
            <td>{item.population}</td>
            <td></td>
        </tr>
        )        
    ))
    },[seedData]);

    return (
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Bandera</th>
            <th>Población</th>
            <th>Más</th>
            </tr>
        </thead>
        <tbody>
            {tableData}
        </tbody>
        </Table>
    );
  }
  
  export default ResultsTable;