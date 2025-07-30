const Titulo = ({ texto, nivel = 1 }) => {
  const Tag = `h${nivel}`;
  return <Tag>{texto}</Tag>;
};
export default Titulo;
