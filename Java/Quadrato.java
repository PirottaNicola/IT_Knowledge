package Java;

public class Quadrato extends Rettangolo {

    // the child class does not inherit the constructors from the parent class, so
    // we need to define them again
    public Quadrato(int base, int altezza) {
        super(base, altezza);
    }

    public Quadrato(int base) {
        super(base, base);
    }

    // a child class inherits all the methods from the parent class and can override
    // them if needed
    @Override
    public int area() {
        return this.base * this.base;
    }

}
