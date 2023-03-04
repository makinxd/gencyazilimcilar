<script lang="ts">
    import Sparticles from '../lib/components/Sparticles.svelte';
    import Landing from '../lib/components/Landing.svelte';
    import Card from '../lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Genç Yazılımcılar</title>
    <meta name="description" content="Genç yazılımcılar için genç bir topluluk.">
    <meta name="author" content="Genç Yazılımcılar">
    <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600&display=swap" rel="stylesheet">
</svelte:head>

<div class="particles-container">
    <Sparticles></Sparticles>
</div>

<Landing></Landing>

<Card></Card>

<style>
    :global(:root) {
        --spacing-unit: 5px;
    }

    :global(::-webkit-scrollbar) {
        display: none;
    }

    :global(::selection) {
        color: #0b1425;
        background-color: #d3d6e4;
    }

    :global(body) {
        background-color: #151518;
        color: #ffffff;
        font-family: 'Exo 2', sans-serif;
        max-width: 105ch;
        height: 100%;
        margin: 0 auto;
        padding: 0px 30px 0px 30px;
	}

    .particles-container {
        position: fixed;
        width: 100%;
        height: 100vh;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
    }
</style>
