const Tabla = ({ cabecera = [], datos = [] }) => (
  <table className="table table-bordered">
    <thead>
      <tr>
        {cabecera.map((col, i) => <th key={i}>{col}</th>)}
      </tr>
    </thead>
    <tbody>
      {datos.map((fila, i) => (
        <tr key={i}>
          {fila.map((dato, j) => <td key={j}>{dato}</td>)}
        </tr>
      ))}
    </tbody>
  </table>
);
export default Tabla;
