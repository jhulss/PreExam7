class Cambio{
  
  calcularMinimoCantidadMonedas(monto) {
    const monedas = [5, 2, 1, 0.5, 0.2];
    const cantidadMonedas = [];
  
    for (let i = 0; i < monedas.length; i++) {
      const moneda = monedas[i];
      const cantidad = Math.floor(monto / moneda);
      if (cantidad > 0) {
        for (let j = 0; j < cantidad; j++) {
          cantidadMonedas.push(moneda);
        }
        monto -= cantidad * moneda;
      }
    }
  
    return cantidadMonedas;
  }

}
export default Cambio;
