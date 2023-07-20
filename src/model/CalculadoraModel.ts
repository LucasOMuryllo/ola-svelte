const Nao_Limpa_tela = false
const Limpa_tela = true

export default class CalculadoraModel {
    #valor: string;
    #acumulador: number;
    #limparTela: boolean;
    #operacao: string;

    constructor(valor: string = null, acumulador: number = null, operacao: string = null, limparTela: boolean = false) {
        this.#valor = valor;
        this.#acumulador = acumulador;
        this.#limparTela = limparTela;
        this.#operacao = operacao
    }

    get valor() {
        return this.#valor?.replace('.', ',') || '0';
    }

    numeroDigitado(novoValor: string) {
        return new CalculadoraModel(
            (this.#limparTela || !this.#valor) ? novoValor : this.#valor + novoValor,
            this.#acumulador,
            this.#operacao,
            Nao_Limpa_tela,
        )

    }

    pontoDigitado() {
        return new CalculadoraModel(
            this.#valor?.includes('.') ? this.#valor : this.#valor + '.',
            this.#acumulador,
            this.#operacao,
            Nao_Limpa_tela,
        )
    }

    limpar() {
        return new CalculadoraModel()
    }

    operacaoDigitada(proximaOperacaoDigitada: string) { 
        return this.calcular(proximaOperacaoDigitada)
    }

    calcular(proximaOperacao: string = null) {
        const acumulador = !this.#operacao
        ? parseFloat(this.#valor)
        : eval(`${this.#acumulador} ${this.#operacao} ${this.#valor}`)

        const valor = !this.#operacao ? this.#valor : `${acumulador}`
        return new CalculadoraModel(
            valor,
            acumulador,
            proximaOperacao,
            proximaOperacao ? Limpa_tela : Nao_Limpa_tela
        )
    }
}