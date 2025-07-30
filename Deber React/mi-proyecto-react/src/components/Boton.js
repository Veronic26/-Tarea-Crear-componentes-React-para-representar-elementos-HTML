const Boton = ({ texto, onClick }) => (
  <button className="btn btn-primary" onClick={onClick}>
    {texto}
  </button>
);
export default Boton;
