# data types
Int = 1
Float  = 1.0
String  = "ciao" # oppure 'ciao'
Bool  = True
#* simple data structures
List  = [1, 2, 3]
Tuple  = (1, 2, 3)
Set  = {1, 2, 3}
Dict  = {"chiave": "valore"}

#* print all variables and their names on new lines
print("Int:", Int, "\nFloat:", Float, "\nString:", String, "\nBool:", Bool, "\nList:", List, "\nTuple:", Tuple, "\nSet:", Set, "\nDict:", Dict)

#* variables
x = 1
y = x # y = 1, non è strettamente collegata a x, ma al suo valore in questo momento del programma, se aggiorno x, y non cambia
x = 2
print("x:", x, "\ny:", y) # x = 2, y = 1

#* user input
x = input("Inserisci un numero: ") # x = "1" always returns a string
print("Hai inserito: ", x, " di tipo:", type(x))

#* type casting
x = 9 / 3 # x = 3.0
x = int(x) # x = 3
x = str(x) # x = "3"

#* string methods
hello = 'hello friend'
print(hello.upper()) # HELLO
print(hello.capitalize()) # Hello
print(hello.replace('e', 'a')) # hallo
print(hello.isalpha()) # True
print(hello.isdigit()) # False
print(hello.isalnum()) # True
print(hello.islower()) # True
print(hello.isspace()) # False
print(hello.startswith('h')) # True
print(hello.endswith('o')) # True
print(hello.find('e')) # 1
print(hello.find('a')) # -1
print(hello.count('l')) # 2
print(hello.split(' ')) # ['hello', 'friend']

print(hello * 4) # hello friendhello friendhello friendhello friend

#* comparison operators
x = 1
y = 2
print(x == y) # False
print(x != y) # True
print(x > y) # False
print(x < y) # True
print(x >= y) # False
print(x <= y) # True

result = (x == y) and (x != y) or not(x < y)

#* if statement
if x == y:
    print("x = y")
elif x > y:
    print("x > y")
else:
    print("x < y")

#* while loop 
x = 0
while x < 10:
    print(x, end='-') # 0 1 2 3 4 5 6 7 8 9
    x += 1
print('/n')

y = 0
while True:
    print('running') # running forever
    y += 1
    if y == 10:
        break


#* for loop (start, stop, step)
for x in range(10):
    print(x, end='-') # 0 1 2 3 4 5 6 7 8 9
print('/n')

for x in range(1, 10, 2):
    print(x, end='-') # 1 3 5 7 9
print('/n')

for x in range(10, 1, -1):
    print(x, end='-') # 10 9 8 7 6 5 4 3 2
print('/n')

for x in "hello":
    print(x, end='-') # h e l l o
print('/n')


#* data structures
#? list --> [ MUTABLE ]
x = [1, 2, 3]
y = [4, 'true', 'hi']
print(x + y) # [1, 2, 3, 4, true, 'hi']
print(x[0]) # 1
print(x[1:]) # [2, 3]
# the : is the slice operator and it means "up to but not including"
print(x[:2]) # [1, 2]
print(x[-1]) # 3
print(x[-2:]) # [2, 3]
print(x[:-2]) # [1]  
print(x[1:3]) # [2, 3]
print(x[::2]) # [1, 3]
print(x[::-1]) # [3, 2, 1]
print(x.index(1)) # 0 
print(x.count(1)) # 1
x.append(4) # [1, 2, 3, 4]
x.insert(0, 0) # [0, 1, 2, 3, 4]
x.remove(0) # [1, 2, 3, 4]
x.pop() # [1, 2, 3]
x.pop(1) # [1, 3]
x.sort() # [1, 3]
x.reverse() # [3, 1]
x.clear() # []
print(x)

x = [1, 2, 3]
y = x # y = [1, 2, 3] LINKED BY REFERENCE, se aggiorno x, y cambia
x[0] = 0 # y = [0, 2, 3]
print(x, y)

#? tuple --> ( IMMUTABLE List )
x = (1, 2, 3) # try to change it --> TypeError: 'tuple' object does not support item assignment

#? set --> { UNORDERED, UNIQUE }
x = {1, 2, 3, 4, 4, 4, 4, 4} # {1, 2, 3, 4}
y = {3, 4, 5, 6}
print(x | y) # {1, 2, 3, 4, 5, 6}
print(x & y) # {3, 4}
print(x - y) # {1, 2}
print(x ^ y) # {1, 2, 5, 6}
print(1 in x) # True
print(1 not in x) # False
x.add(5) # {1, 2, 3, 4, 5}
x.remove(5) # {1, 2, 3, 4}
x.discard(5) # {1, 2, 3, 4}

#? dictionary --> { KEY: VALUE }
x = { "name": "John", "age": 36 }
print(x["name"]) # John
print(x.get("name")) # John
print(x.keys()) # dict_keys(['name', 'age'])
print(x.values()) # dict_values(['John', 36])
print(x.items()) # dict_items([('name', 'John'), ('age', 36)])
x["name"] = "Jack" # { "name": "Jack", "age": 36 }
x["surname"] = "Smith" # { "name": "Jack", "age": 36, "surname": "Smith" }
x.pop("surname") # { "name": "Jack", "age": 36 }
x.popitem() # { "name": "Jack" }

for key, value in x.items():
    print(key, value)

#? list comprehension --> [ expression for item in list if conditional ]
x = [x for x in range(10) if x % 2 == 0] # [0, 2, 4, 6, 8]
x = [x if x % 2 == 0 else 0 for x in range(10)] # [0, 0, 2, 0, 4, 0, 6, 0, 8, 0]



#* functions
def my_function(x, y, z = 0): # z is optional
    print("Hello from a function")
    return x + y + z

my_function(6, 7) # Hello from a function


#* spread operator
x = [1, 2, 3]
print(x) # [1, 2, 3]
print(*x) # 1 2 3

def func(*args, **kwargs):
    print(args) # (1, 2, 3)
    print(kwargs) # {'a': 1, 'b': 2, 'c': 3}

func(1, 2, 3, a = 1, b = 2, c = 3) # 1 2 3 {'a': 1, 'b': 2, 'c': 3}


#* scope
x = 1 # global scope

def my_function():
    print(x) # 1 --> global scope
    x = 2 # local scope --> creating a new variable x, although it has the same name as the global variable x, these two variables are not the same
    print(x) # 2 --> local scope

print(x) # 1 



#* exceptions
try:
    x = 7 / 0 # ZeroDivisionError: division by zero
except Exception as e:
    print(e) # You can't divide by zero!



#* lambda functions (anonymous functions)
x = lambda a, b : a * b
print(x(5, 6)) # 30

x = [1, 2, 3, 3, 5, 6, 77, 776, 45, 34, 2, 2, 4]
mp = map(lambda i: i +2, x) # map takes a function and a list and applies the function to each element of the list
print(list(mp)) # [3, 4, 5, 5, 7, 8, 79, 778, 47, 36, 4, 4, 6]

mp = filter(lambda i: i % 2 == 0, x) # filter takes a function and a list and returns a list with only the elements that satisfy the function
print(list(mp)) # [2, 6, 776, 34, 2, 2, 4]


#* fstrings (formatted string literals)
name = "John"
age = 36
print(f"Hello, my name is {name} and I am {age}") # Hello, my name is John and I am 36


#* classes
class Person:
    def __init__(self, name, age): # constructor
        self.name = name
        self.age = age

    def myfunc(self): # method
        print("Hello my name is " + self.name)

p1 = Person("John", 36)
p1.myfunc() # Hello my name is John

class Student(Person): # inheritance
    def __init__(self, name, age, year):
        super().__init__(name, age)
        self.year = year

    def myfunc(self):
        print("Hello my name is " + self.name + " and I am " + str(self.age) + " years old and I am in year " + str(self.year))

s1 = Student("John", 36, 3)
s1.myfunc() # Hello my name is John and I am 36 years old and I am in year 3


#* modules
import mymodule
mymodule.greeting("Jonathan") # Hello, Jonathan --> mymodule.py


#* file handling
f = open("demofile.txt", "r") # r = read, a = append, w = write, x = create
print(f.read()) # Hello! Welcome to demofile.txt
f.close()

#* create a file
f = open("demofile.txt", "w")
f.write("Woops! I have deleted the content!")
f.close()

#* delete a file
import os
os.remove("demofile.txt")




#* decorators
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_whee():
    print("Whee!")

say_whee() # Something is happening before the function is called. Whee! Something is happening after the function is called.


#* generators
def my_generator():
    for i in range(10):
        yield i

for i in my_generator():
    print(i) # 0 1 2 3 4 5 6 7 8 9


#* iterators
class MyIterator:
    def __init__(self, max):
        self.max = max
        self.n = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.n < self.max:
            self.n += 1
            return self.n
        else:
            raise StopIteration

for i in MyIterator(10):
    print(i) # 1 2 3 4 5 6 7 8 9 10



#* concurrency
import threading
import time
