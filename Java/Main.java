package Java;

import java.util.Date; // import the Date class
import java.awt.Point; // import the Point class
import java.util.ArrayList;
import java.util.Arrays; // import the Arrays class
import java.util.Scanner; // import the Scanner class
import java.util.List; // import the List class

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
        print("Hello World!"); // call print method from below
        int age = 20;
        print(age + " years old");
        int herAge = age;
        print(herAge + " years old");

        long viewsCount = 123_456_789L;
        // underscore is for readability, the L is needed for the compiler to know it's
        // a long, otherwise it will read it as an int
        float price = 10.99F;
        // F is needed for the compiler to know it's a float, otherwise it will read it
        // as a double (which is the default for decimal numbers and is more precise)
        char letter = 'A';
        // single quotes for char, double quotes for string
        boolean isEligible = false;
        String message = "Hello World" + "!!";
        // strings are IMMUTABLE, meaning that they cannot be changed, so if we do this:
        // message = message + "??";
        // we are not changing the original string, we are creating a new one
        // and then we are assigning it to the message variable
        // so the original string is still there, but we are not using it anymore

        print(currentDate());
        print(currentDate().getTime() + "");

        // empty string
        Point point1 = new Point(1, 2);
        Point point2 = point1;
        print(point1);
        print(point2);
        // point2 is a reference to point1, so if we change point2, point1 will also
        // change
        point2.x = 2;
        print(point1);

        tryStringMethods(message);

        // escape sequences
        print("Hello \"World\"!! this is a backslash \\");

        // arrays
        int[] numbers = { 1, 4, 3, 2, 5 };
        print(numbers);
        // prints the memory address of the array
        print(numbers[0]);
        // prints the first element of the array
        print(numbers.length);
        // prints the length of the array
        print(Arrays.toString(numbers));
        // prints the array as a string
        // The Arrays class differs from the arrayclass (which is a primitive type) and
        // it has a lot of useful methods
        Arrays.sort(numbers);
        // sorts the array
        print(Arrays.toString(numbers));

        // multidimensional arrays
        int[][] matrix = { { 1, 2, 3 }, { 4, 5, 6 } };
        print(Arrays.toString(matrix));
        // prints the memory address of the arrays
        print(Arrays.deepToString(matrix));
        // prints the multidimensional array as a string

        // constants
        final float PI = 3.14F; // final means that the value cannot be changed
        // PI = 1; // this will give an error

        // casting
        // implicit casting
        short x = 1; // 2 bytes (16 bits)
        int y = x + 2; // 4 bytes (32 bits)
        // byte > short > int > long > float > double
        // explicit casting
        double a = 1.1;
        int b = (int) a + 2;
        print(b); // 3 (the decimal part is lost)
        String c = "1";
        int d = Integer.parseInt(c) + 2; // converts string to int
        print(d); // 3

        tryInputMethods();

        // logical operators
        int temperature = 22;
        boolean isWarm = temperature > 20 && temperature < 30; // AND
        print(isWarm); // true
        boolean hasHighIncome = true;
        boolean hasGoodCredit = true;
        boolean hasCriminalRecord = false;
        boolean isEligible2 = (hasHighIncome || hasGoodCredit) && !hasCriminalRecord; // OR and NOT
        print(isEligible2); // true

        // if statements
        int temp = 32;
        if (temp > 30) {
            print("It's a hot day");
            print("Drink water");
        } else if (temp > 20 && temp <= 30) {
            print("Beautiful day");
        } else {
            print("Cold day");
        }

        // ternary operator
        int income = 120_000;
        String className = income > 100_000 ? "First" : "Economy";
        print(className);

        // switch statements
        String role = "admin";
        switch (role) {
            case "admin":
                print("You're an admin");
                break;
            case "moderator":
                print("You're a moderator");
                break;
            default:
                print("You're a guest");
        }

        // for loops
        for (int i = 0; i < 5; i++) {
            print("Hello World " + i);
        }

        // while loops
        int i = 0;
        while (i < 5) {
            print("Hello World " + i);
            i++;
        }

        // do while loops
        do {
            print("Hello World " + i);
            i++;
            if (i == 3) {
                break;
                // breaks the loop (while continue skips the current iteration of the loop), so
                // it will only print 3 times
            }
        } while (i < 5);

        // for each loops
        String[] fruits = { "Apple", "Mango", "Orange" };
        for (String fruit : fruits) {
            print(fruit);
        }

        // Lists
        List<String> fruitList = new ArrayList<String>();
        fruitList.add("Apple");

    }

    public static void print(Object obj) {
        // in order to be able to print every type of object, we use Object as the type
        // of the parameter and then we convert it to string with + ""
        System.out.println(obj + "");
    }

    public static Date currentDate() {
        return new Date();
    }

    public static void tryStringMethods(String s) {
        print("String methods");
        print(s.endsWith("!!")); // true
        print(s.indexOf('H')); // 0
        print(s.indexOf("sky")); // returns -1 if not found
        print(s.replace("World", "Humans")); // Hello Humans!!
    }

    public static void tryMathMethods() {
        print("Math methods");
        print(Math.round(1.1F)); // 1
        print(Math.ceil(1.1F)); // 2
        print(Math.floor(1.1F)); // 1
        print(Math.max(1, 2)); // 2
        print(Math.min(1, 2)); // 1
        print(Math.random()); // random number between 0 and 1
        print(Math.random() * 100); // random number between 0 and 100
        print(Math.round(Math.random() * 100)); // random number between 0 and 100 rounded
    }

    public static void tryInputMethods() {
        Scanner scanner = new Scanner(System.in);
        // System.in is the input stream (the keyboard) and we pass it to the scanner so
        // it can read from it
        System.out.print("Name: ");
        String name = scanner.nextLine().trim();
        // trim removes the spaces at the beginning and end of the string, nextLine
        // reads the whole line (including spaces)
        System.out.println("You are " + name);
        scanner.close();
    }

}