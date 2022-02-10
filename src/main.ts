type TypePromise = 'myPromise' | 'myPromiseErr'
interface Data {
    nome: string
    cognome: string
    eta: number
}

const chiamaPromise = async (type: TypePromise): Promise<void> => {
    type === 'myPromise' ? 
        await myPromise
        .then((data: Data) => {
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

const myPromise: Promise<Data> = new Promise((resolve, reject) => {
    setTimeout(() => {
        const obj: Data =  {
            nome: 'Maurizio',
            cognome: 'Tolomeo',
            eta: 33
        }
        resolve(obj)
    }, 3000)
})


const myPromiseErr = (): Promise<Error> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Si e\' presentato un errore!'))
        }, 1000)
    })
}

chiamaPromise('myPromise') //eseguita per prima ma termina per ultima
chiamaPromise('myPromiseErr') //eseguita dopo ma termina prima
console.log('\nmain terminato') //eseguita per ultima ma termina per prima

// ;(async () => {
//     //esecuzione in serie
//     await chiamaPromise('myPromise') 
//     await chiamaPromise('myPromiseErr')
//     console.log('main terminato') 
// })()