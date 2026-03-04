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
        };

    elegircombo()   {
        this.preparar();
        this.hornear();
        this.empacar();

        console.log(
            `Has elegido el combo ${this.combo} que incluye ${this.cantidad} pizzas de tamaño ${this.tamano} con masa ${this.masa}
             y los siguentes ingredientes: ${this.ingredientes}. Ademas incluye una bebida de ${this.
            bebida} y un postre de ${this.postre}.`
        );

        return this;
    };
};

const comboFamiliar = new Combos("Familiar", 4,"grande", "delgada", ["jamon", "piña", "queso"], "refresco", "helado");
console.log(comboFamiliar.elegircombo());