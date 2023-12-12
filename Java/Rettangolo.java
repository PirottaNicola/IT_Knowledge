package Java;

public class Rettangolo {
    public int base;
    public int altezza;

    public Rettangolo(int base, int altezza) {
        this.base = base;
        this.altezza = altezza;
    }

    public int area() {
        return this.base * this.altezza;
    }
}
