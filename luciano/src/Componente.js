export function mayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else if (edad >= 0) {
    return false;
  } else {
    return null;
  }
}

const Componente = () => {
  return <div>Componente</div>;
};

export default Componente;
