import { menu } from '../views/menus'
import { leerTeclado } from '../views/entradateclado'
const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('VAMOS A CALCULAR EL AREA Y PERÍMETRO DEL ROMBO')
                let diagonalMenor:number, diagonalMayor:number, ladorombo: number
                diagonalMayor = parseInt(await leerTeclado('INTRODUZCA LA DIAGONAL MAYOR'))
                diagonalMenor = parseInt(await leerTeclado('INTRODUZCA LA DIAGONAL MENOR'))
                ladorombo = parseInt(await leerTeclado('INTRODUZCA EL LADO DEL ROMBO'))
                let perimetrorombo=pRombo(ladorombo)
                let arearombo=aRombo(diagonalMenor,diagonalMayor,ladorombo)
                console.log("POR LO TANTO EL PERÍMETRO ES = "+perimetrorombo)
                console.log("POR LO TANTO ÁREA ES = "+arearombo)
                break
            case 2:
                console.log('VAMOS A CALCULAR EL AREA Y PERÍMETRO DEL CUADRADO')
                let ladocuadrado:number
                ladocuadrado = parseInt(await leerTeclado('INTRODUZCA EL LADO DEL CUADRADO'))
                let perimetrocuadrado=pCuadrado(ladocuadrado)
                let areacuadrado=aCuadrado(ladocuadrado)
                console.log("POR LO TANTO EL PERÍMETRO ES = "+perimetrocuadrado)
                console.log("POR LO TANTO ÁREA ES = "+areacuadrado)
                break
            case 3:
                console.log('VAMOS A CALCULAR EL AREA Y PERÍMETRO DEL RECTÁNGULO')
                let baserectangulo:number, alturarectangulo:number
                baserectangulo = parseInt(await leerTeclado('INTRODUZCA EL LADO DEL RECTÁNGULO'))
                alturarectangulo = parseInt(await leerTeclado('INTRODUZCA LA ALTURA DEL REACTÁNGULO'))
                let perimetrorectangulo=pRectangulo(baserectangulo,alturarectangulo)
                let arearectangulo=aRectangulo(baserectangulo,alturarectangulo)
                console.log("POR LO TANTO EL PERÍMETRO ES = "+perimetrorectangulo)
                console.log("POR LO TANTO ÁREA ES = "+arearectangulo)
                break
            case 0:
                console.log('\nPROCEDEMOS A CERRAR EL PROGRAMA...')
                break
            default:
                console.log("¿Qué has introducido?")
                break
        }
    }while (n != 0)
}
 

/*Calculos rombo */

const pRombo = (ladorombo:number) => {
    let cuenta=0;
    cuenta=ladorombo*4
    return cuenta
}

const aRombo = (diagonalMenor:number,diagonalMayor:number,ladorombo:number) => {
    let cuenta=0
    cuenta=(diagonalMayor*diagonalMenor)/ladorombo
    return cuenta
}

/*Calculos cuadrado */

const pCuadrado = (lado:number) => {
    let cuenta=0
    cuenta=lado*4
    return cuenta
}

const aCuadrado = (lado:number) => {
    let cuenta=0
    cuenta=lado*lado
    return cuenta
}

/*Calculos rectángulo */

const pRectangulo = (base:number, altura:number) => {
    let cuenta=0
    cuenta=(base*2+altura*2)
    return cuenta
}

const aRectangulo = (base:number, altura:number) => {
    let cuenta=0
    cuenta=altura*base
    return cuenta
}
main()

