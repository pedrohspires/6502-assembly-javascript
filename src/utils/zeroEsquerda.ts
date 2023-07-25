export default function zeroEsquerda(valor: number, tamanho: number, base: number = 16): string {
    let count = 0;
    let zerosEsquerda: string = "";

    while (count < tamanho) {
        zerosEsquerda += "0"
        count++;
    }

    return (zerosEsquerda + valor.toString(base)).slice(tamanho * (-1));
}