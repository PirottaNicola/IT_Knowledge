#%%
def f(x,y):
    m = (x+y) /2
    return m
print (f(2,3))

#%%
pi = 'outer pi variable'
def print_pi():
    pi = 'inner pi variable'
    print(pi)
print_pi()
print(pi)

#%%
def somma(a,b, c=3, d=0, e =0):
    return a+b+c+d+e

print (somma(1,2, d=1, e= 1))