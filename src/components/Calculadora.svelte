<script lang="ts">
    import CalculadoraModel from "../model/CalculadoraModel";
    import Botao from "./Botao.svelte";
    import Linha from "./Linha.svelte";
    import Tela from "./Tela.svelte";

    let calc = new CalculadoraModel();
    const numeroDigitado = (num: string) => (calc = calc.numeroDigitado(num));
    const operacaoDigitada = (op: string) => (calc = calc.operacaoDigitada(op));
    const pontoDigitado = () => (calc = calc.pontoDigitado());
    const calcular = () => (calc = calc.calcular());
    const limpar = () => (calc = calc.limpar());
</script>

<div class="calculadora">
    <Tela valor={calc.valor} />
    <Linha>
        <Botao destaque={true} triplo={true} text="AC" onClick={limpar} />
        <Botao operacao={true} text="/" onClick={operacaoDigitada}/>
    </Linha>
    <Linha>
        <Botao text="7" onClick={numeroDigitado} />
        <Botao text="8" onClick={numeroDigitado} />
        <Botao text="9" onClick={numeroDigitado} />
        <Botao operacao={true} text="*" onClick={operacaoDigitada}/>
    </Linha>
    <Linha>
        <Botao text="4" onClick={numeroDigitado} />
        <Botao text="5" onClick={numeroDigitado} />
        <Botao text="6" onClick={numeroDigitado} />
        <Botao operacao={true} text="+" onClick={operacaoDigitada}/>
    </Linha>
    <Linha>
        <Botao text="1" onClick={numeroDigitado} />
        <Botao text="2" onClick={numeroDigitado} />
        <Botao text="3" onClick={numeroDigitado} />
        <Botao operacao={true} text="-" onClick={operacaoDigitada}/>
    </Linha>
    <Linha>
        <Botao duplo={true} text="0" onClick={numeroDigitado} />
        <Botao text="," onClick={pontoDigitado} />
        <Botao destaque={true} text="=" onClick={calcular}/>
    </Linha>
</div>

<style>
    .calculadora {
        background-color: var(--background-color);
        height: 220px;
        width: 150px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        border-radius: 10px;
    }
</style>
