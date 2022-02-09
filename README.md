### PROMISE

Sommario:
- distinzioni tra funzione sincrona e asincrona
- cos'e' una Promise
- come scrivere una Promise: resolve e reject
- key: then, catch e finally
- key: async e await

## Distinzioni tra funzione sincrona e asincrona

Una normale funzione sincrona (callback) viene eseguito in un singolo thread cioe' il codice inizierà dall'inizio di un file ed verrà eseguito fino in fondo, ogni riga in ordine finché non arriva in fondo e si fermerà. Ad esempio, se una funzione impiega un po 'di tempo per essere eseguita o deve attendere qualcosa, nel frattempo si blocca tutto perché il codice sincrono può eseguire solo un'attività alla volta, attende fino a quando una determinata istruzione non è stata eseguita, quindi si sposta a quello successivo.
In una funzione asincrona (async) viene eseguito su piu' thread cioe' il codice padre che chiama una funzione asincrona continua la sua serie di istruzioni mentre quella asincrona sta eseguendo le sue (parallelo).

## Cos'e' una Promise

Le Promise sono state concepite per rappresentare operazioni incomplete al momento corrente che saranno però complete in futuro; per questo motivo parliamo di un costrutto adottato nel caso di elaborazioni asincrone e differite. Data la loro natura le Promise prevedono tre stati differenti:

- pending, cioè in attesa, che è lo stato iniziale.
- fulfilled, cioè "soddisfatto", che si verifica quando un'operazione ha avuto successo.
- rejected, cioè "respinto", nel caso del fallimento di un'operazione.

Un pending può esitare sia in fulfilled che in rejected, nel primo caso verrà generato un valore, nel secondo avremo una notifica di errore.

## Come scrivere una Promise

Le Promise prevedono un esecutore (executor) a cui passare gli argomenti resolve e reject che sono in pratica due funzioni. Quando vengono chiamate esse risolvono o rigettano una Promise, resolve risolve la Promise, reject agisce invece in caso di errore; un errore dell'esecutore porta a rigettare la Promise:

    new Promise(function(resolve, reject) { ... });

## Key: then, catch e finally

Le Promise agiscono su due canali, il primo per la restituzione del risultato, il secondo per gli eventuali errori. Il risultato verrà proposto attraverso la clausola then, mentre l'errore è gestibile tramite catch, come nell'esempio seguente:

    function asyncFunc() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const a = Math.random();
                a > 0.4 ? resolve(a) : reject('impossibile restituire un risultato.');
            }, 1)
        });
    }

    for (let x=0; x<5; x++) {
        asyncFunc()
            .then(a => console.log('Risultato: ' + a))
            .catch(a => console.log('Attenzione: ' + a));
    }

La chiave finally invece agisce in ogni caso dopo then e catch (sostanzialmente dopo un resolve o una reject).

## Key: async e await

C'è una sintassi speciale per lavorare con le Promise in modo più comodo, chiamata "async/await". Per dichiarare che una funzione e' asincrona e utilizzera' le Promise allora va preceduto async a una funzione (function):

    async function f() {
        return Promise.resolve(1);
    }

    //oppure con le arrow function
    async () => {
        return Promise.resolve(1);
    }

    f().then(alert); // restituira' 1

La parola chiave await fa attendere a JavaScript fino a quando la promessa non si stabilizza e restituisce il risultato, va dichiarata solo dentro un async function:

    async function f() {
        let value = await promise;
    }

L'esecuzione della funzione "si ferma" sulla linea e riprende quando la promessa si risolve, diventando il suo risultato. 