#! node

class IPhone {
  constructor({ price, color, size }) {
    this.price = price;
    this.color = color;
    this.size = size;
  }
}

class Oppo extends IPhone {
  constructor({ price, color, size, type, camera }) {
    super({ price, color, size });
    this.type = type;
    this.camera = camera;
  }

  printScreen() {
    return "Oppo";
  }
}

class Vivo extends IPhone {
  constructor({ price, color, size, type, camera }) {
    super({ price, color, size });
    this.type = type;
    this.camera = camera;
  }

  printScreen() {
    return "Vivo";
  }
}

class OppoFactory {
  static create(type) {
    switch (type) {
      case "A5":
        return new Oppo({
          price: "$1000",
          color: "black",
          size: "5.5",
          type: "A5",
          camera: "12MP",
        });
      case "F5":
        return new Oppo({
          price: "$700",
          color: "white",
          size: "5",
          type: "F5",
          camera: "8MP",
        });
      default:
        return new Oppo({
          price: "$500",
          color: "red",
          size: "4.5",
          type: "F7",
          camera: "16MP",
        });
    }
  }
}

class VivoFactory {
  static create(type) {
    switch (type) {
      case "A5":
        return new Vivo({
          price: "$1000",
          color: "black",
          size: "5.5",
          type: "A5",
          camera: "12MP",
        });
      case "F5":
        return new Vivo({
          price: "$700",
          color: "white",
          size: "5",
          type: "F5",
          camera: "8MP",
        });
      default:
        return new Vivo({
          price: "$500",
          color: "red",
          size: "4.5",
          type: "F7",
          camera: "16MP",
        });
    }
  }
}

class AbstractFactory {
  static create(type) {
    switch (type) {
      case "Oppo":
        return OppoFactory;
      case "Vivo":
        return VivoFactory;
      default:
        return null;
    }
  }
}

const oppo = AbstractFactory.create("Oppo").create("A5");

const vivo = AbstractFactory.create("Vivo").create("A5");

console.log(oppo);
console.log(vivo);
