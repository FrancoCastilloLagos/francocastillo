// Clase Abstracta
export abstract class FiguraGeometrica {
    constructor(public nombre: string) {}
    abstract calcularPerimetro(): number;
  }
  
  export class Circulo extends FiguraGeometrica {
    constructor(public radio: number) {
      super("Círculo");
    }
    calcularPerimetro(): number {
      return 2 * Math.PI * this.radio;
    }
  }
  
  export class TrianguloEscaleno extends FiguraGeometrica {
    constructor(
      private ladoA: number,
      private ladoB: number,
      private ladoC: number
    ) {
      super("Triángulo Escaleno");
    }
    calcularPerimetro(): number {
      return this.ladoA + this.ladoB + this.ladoC;
    }
  }

  export class TrianguloEquilatero extends FiguraGeometrica {
    constructor(private ladoA: number) {
      super("Triángulo Equilátero");
    }
    calcularPerimetro(): number {
      return 3 * this.ladoA;
    }
  }
  