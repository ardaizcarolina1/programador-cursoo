const calcularPromedio = (notaParcial1, notaParcial2) => {
  return (notaParcial1 + notaParcial2) / 2;
};

// Ejemplo de uso con la materia Historia
const nota1 = 7;
const nota2 = 8;

const promedioHistoria = calcularPromedio(nota1, nota2);
console.log(`El promedio de Historia es: ${promedioHistoria}`);