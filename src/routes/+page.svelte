<script lang="ts">
    import Landing from '../lib/components/Landing.svelte';
</script>

<svelte:head>
	<title>Genç Yazılımcılar</title>
    <meta name="description" content="Genç yazılımcılar için genç bir topluluk.">
    <meta name="author" content="Genç Yazılımcılar">
    <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600&display=swap" rel="stylesheet">
</svelte:head>

<Landing></Landing>

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
        background-color: #0f0f12;
        background: url(../assets/background.jpg);
        color: #ffffff;
        font-family: 'Exo 2', sans-serif;
        max-width: 115ch;
        height: 100%;
        margin: 0 auto;
        padding: 0px 30px 0px 30px;
	}
</style>
