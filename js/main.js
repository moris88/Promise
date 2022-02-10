//uso di then/catch e finally
const chiamaPromise = async (type) => {
    type === 'myPromise' ? 
        await myPromise
        .then((data) => {
            console.log(data)
        })
        .catch(error => console.error(error))
        .finally(() => {
            console.log('\nesecuzione terminata myPromise')
        })
    :
        await myPromiseErr()
        .then(() => {
            console.log('myPromiseErr')
        })
        .catch(error => console.error(error))
        .finally(() => {
            console.log('\nesecuzione terminata myPromiseErr')
        })
}

//creazione Promise come variabile
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const obj =  {
            nome: 'Maurizio',
            cognome: 'Tolomeo',
            eta: 33
        }
        resolve(obj)
    }, 3000)
})

//creazione Promise come funzione
const myPromiseErr = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Si e\' presentato un errore!'))
        }, 1000)
    })
}

//chiamate asincrone
chiamaPromise('myPromise') 
chiamaPromise('myPromiseErr') 
console.log('\nmain terminato') 

//uso di async
async function test() {
    setTimeout(() => {
        console.log('test')
    }, 1000)
}
test().then(() => {
    console.log('test2')
})

//chiamate sincrone usando await con funzione anonima
;(async () => {
    //esecuzione in serie
    await chiamaPromise('myPromise') 
    await chiamaPromise('myPromiseErr')
    console.log('main terminato') 
})()