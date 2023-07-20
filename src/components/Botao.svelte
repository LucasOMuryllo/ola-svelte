<script lang="ts">
    export let text: string = "";
    export let triplo: boolean = false;
    export let duplo: boolean = false;
    export let operacao: boolean = false;
    export let destaque: boolean = false;
    export let onClick: (valor: string) => void = () => {};
</script>

<button class="botao"
    on:click={() => onClick(text)}
    class:triplo
    class:duplo
    class:operacao
    class:destaque
    >
    {text}
</button>

<style>
    .botao {
        flex-basis: 25%;
        margin: 0;
        border: 1px solid var(--background-color);
    }

    .triplo {
        flex-basis: 75%;
    }

    .duplo {
        flex-basis: 50%;
    }

    .operacao {
        background-color: orange !important;
        color: white !important;
    }

    .destaque {
        background-color: red !important;
        color: white !important;
    }
</style>
