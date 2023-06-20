import Cambio from "./sumador";

describe("Cambiar", () => {
  it("deberia cambiar monedas", () => {
    const cambiar = new Cambio();
    expect(cambiar.calcularMinimoCantidadMonedas(19)).toEqual([5, 5, 5, 2, 2]);
  });
  it("deberia cambiar una cantidad pequeña", () => {
    const cambiar = new Cambio();
    expect(cambiar.calcularMinimoCantidadMonedas(2)).toEqual([1, 1]);
  });

});
