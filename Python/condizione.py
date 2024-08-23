#%%
a = 2
if a==1:
    print("A")
elif a==2:
    print ("vale")
    print(a)
else:
    print("nessuno") #regolato dall'indentazione, non dalle parentesi

#%%
lista = ['a','b','c']
somma = 0
for s in lista:
    somma += len(s)
print ('Media: {}'.format(somma/len(lista)))
