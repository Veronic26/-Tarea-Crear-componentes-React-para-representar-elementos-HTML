const Lista = ({ elementos = [] }) => (
  <ul>
    {elementos.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
);
export default Lista;
