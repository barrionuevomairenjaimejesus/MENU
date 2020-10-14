  
import { leerTeclado } from './entradateclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Rombo')
    console.log('2.- Cuadrado')
    console.log('3.- Rectángulo')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('Elección: ') )
    return n
}