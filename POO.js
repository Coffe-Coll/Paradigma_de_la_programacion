class Pizza{
    constructor(masa, tamano, ingredientes) {
        this.masa = masa;
        this.tamano = tamano;
        this.ingredientes = ingredientes;
    };

    preparar() {
        console.log(`Preparando una pizza de ${this.tamano} con masa ${this.masa} y los
        siguientes ingredientes: ${this.ingredientes}.`);
        return this;
    };

    hornear() {
        console.log("La pizza esta en el horno...");
        return this;
    };

    empacar() {
        console.log("Empacando la pizza...");
        return this;
    };
};

const pizzaPeperoni=new Pizza("doble", "grande" , ["jamon", "peperoni", "queso"]);

console.log(pizzaPeperoni.preparar().hornear().empacar());


class Combos extends Pizza {
        constructor(combo, cantidad, tamano, masa, ingredientes, bebida, postre) {
            super(masa, tamano, ingredientes);
            this.combo = combo;
            this.cantidad = cantidad;
            this.bebida = bebida;
            this.postre = postre;
        }
};