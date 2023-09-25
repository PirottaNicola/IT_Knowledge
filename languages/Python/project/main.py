# collect inputs from user

def deposit():
    while (True):
        amount = input("Inserisci l'importo da depositare: ")
        if amount.isdigit():  # amount is a number
            amount = int(amount)
            if amount > 0:
                print("Hai depositato: ", amount)
                break
            else:
                print("L'importo deve essere positivo")
        else:
            print("L'importo deve essere un numero")
    return amount


deposit()
