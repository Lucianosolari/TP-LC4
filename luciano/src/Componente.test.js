import { mayorDeEdad } from "./Componente";

// Tests para la función mayorDeEdad
describe("mayorDeEdad", () => {
  test("Debe retornar true si la edad es mayor o igual a 18", () => {
    expect(mayorDeEdad(18)).toBe(true);
    expect(mayorDeEdad(25)).toBe(true);
  });

  test("Debe retornar false si la edad es menor a 18", () => {
    expect(mayorDeEdad(16)).toBe(false);
    expect(mayorDeEdad(5)).toBe(false);
  });

  it("Debe retornar null si se ingresa un número negativo", () => {
    expect(mayorDeEdad(-10)).toBeNull();
    expect(mayorDeEdad(-1)).toBeNull();
  });
});
