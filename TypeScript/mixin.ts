class Colour {
  private color = '';
  setColor(color: string) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}

class RGB {
  setColorFromRGB(red = 0, green = 0, blue = 0) {
    //
  }
}

class Green {

}

interface Green extends Colour, RGB {}
applyMixins(Green, [Colour, RGB]);

const green  = new Green();


function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
          Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
      });
  });
}
