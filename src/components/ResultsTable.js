import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ResultsTable({seedData}) {

    const [tableData, setTableData] = useState([])

    useEffect(()=> {
    setTableData(
        seedData.map((item, idx)=>(
        <tr key={item.name.common}>
            <td>{idx + 1}</td>
            <td className="leftAlign">{item.name.common}</td>
            <td><img className="miniFlag" src={item.flags.svg} alt={item.name.common} /></td>
            <td>{item.population.toLocaleString()}</td>
            <td><Link to={"/pais/"+item.cca3}>Ver más</Link></td>
        </tr>
        )        
    ))
    },[seedData]);

    return (
        <Table striped bordered hover className="resultsTable">
        <thead>
            <tr>
            <th>#</th>
            <th className="leftAlign">Nombre</th>
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