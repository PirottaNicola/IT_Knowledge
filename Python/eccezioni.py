op1 = int(input('dividendo:'))
op2 = int(input('divisore'))
try:
    n = op1/op2
except ZeroDivisionError as err:
    print('invalid operation ({})!'.format(err))
except ArithmeticError:
    print('invalid operation!')
else:
    print('risultato: {}',n)