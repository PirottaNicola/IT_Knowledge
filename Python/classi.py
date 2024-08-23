class Archivio:
    def __init__(self): #costruttore
        self.elenco = []
        return
    def add_nome(self, nome, eta):  
        self.elenco.append({'nome': nome, 'eta': eta})
        return
    def show(self):
        for e in self.elenco:
            print(e)
        return
    def clean(self):
        self.elenco = [] 
        return


nomi = Archivio()
nomi.add_nome('Pippo',25)
nomi.show()