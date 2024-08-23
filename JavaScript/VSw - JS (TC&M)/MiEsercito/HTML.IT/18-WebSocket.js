/*
Con WebSocket, si identifica una tecnologia che consente di creare una connessione persistente tra client e server tramite 
cui scambiarsi dati in maniera efficiente.
Limiti dei Server-Sent Events
I Server-Sent Events consentono di avere informazioni dal server quando queste sono effettivamente disponibili, evitando 
di dover ricorrere a meccanismi di polling o altre soluzioni che possono rappresentare un inutile spreco di risorse come 
la CPU e la banda.
Pur rappresentando un’ottima soluzione nella maggior parte dei casi, i Server-Sent Events hanno alcune limitazioni che non 
li rendono idonei per l’utilizzo in determinati contesti.
In particolare, essi non implementano una comunicazione bidirezionale, cioè i Server-Sent Events mettono a disposizione un 
canale con cui il server comunica con il client, ma non consentono al client di inviare informazioni verso il server. 
Inoltre, essi si fondano sempre sul protocollo HTTP che non è proprio adatto in contesti in cui è necessaria una comunicazione 
bidirezionale efficiente, come ad esempio in un gioco online o una chat in cui interagiscono più utenti e la comunicazione in 
tempo reale deve essere la più efficiente possibile. */