<script lang="ts">
    import Sparticles from '$lib/components/Sparticles.svelte';
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

<div class="container">
    <div class="content-1" style="text-align: left;">
        <h1>Genç geliştiriciler için genç bir topluluk.</h1>
        <p>Genç Yazılımcılar 50'den fazla üyesiyle birlikte gelişen bir yazılımcı topluluğudur.</p>
        <div class="links">
            <a href="https://discord.gg/kEYXgAZndV" target="_blank" rel="noreferrer nofollow" class="button">Discord'da bize katıl &rarr;</a>
            <a href="https://www.instagram.com/gyazilimcilar/" target="_blank" rel="noreferrer nofollow" class="button" style="background: none; box-shadow:0px 0px 0px 3px white inset;">Instagram'da bizi takip et</a>
        </div>
    </div>
</div>

<style>
    :global(:root) {
        --spacing-unit: 5px;
    }

    :global(::-webkit-scrollbar) {
        display: none;
    }

    :global(::selection) {
        color: #000000;
        background-color: #ffffff;
    }

    :global(body) {
        background-color: #14141a;
        color: white;
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
    
    .content-1 {
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-weight: lighter;
        gap: 12px;
        height: 100vh;
    }

    .content-1 h1 {
        font-weight: 600;
        font-size: 26px;
        margin: 0px;
        line-height: 1.3;
    }

    .content-1 p {
        font-size: 20px;
        color: #ffffff;
        margin: 0px;
        line-height: 1.3;
    }

    .links {
        display: inline-block;
        padding: 20px 0px;
    }
    
    .button {
        background: linear-gradient(215deg, rgb(255, 162, 22) 0%,rgb(230, 14, 226) 100%);
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
        border-radius: 8px;
        padding: 10px 36px;
        margin: 0px 8px 0px 0px;
        transition: ease-in-out 0.2s;
    }

    .button:hover {
        padding: 10px 42px;
    }

    @media all and (max-width: 575px) {
        .content-1 h1 {
            text-align: left;
        }

        .content-1 p {
            text-align: left;
            font-size: 18px;
        }

        .button {
            display: block;
            margin: 8px 0px 0px 0px;
        }

        .links {
            padding: 0;
        }
    }
</style>
