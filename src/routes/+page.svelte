<script>
    import {Tr} from 'svelte-flag-icons';
</script>

<svelte:head>
	<title>Genç Yazılımcılar</title>
    <meta name="description" content="Genç yazılımcılar için genç bir topluluk.">
    <meta name="author" content="Genç Yazılımcılar">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet">
</svelte:head>

<div class="logo">
    <img style="vertical-align: middle" src="images/logo/gencyazilimcilarlogo.png" alt="logo"/>
    <span style="vertical-align: middle"> Genç Yazılımcılar</span>
    <span style="vertical-align: middle">&nbsp;<Tr size="26"/></span>
</div>

<div class="container">
    <div class="content-1" style="text-align: left;">
        <h1>Genç geliştiriciler için genç bir topluluk.</h1>
        <p>Yeni nesil geliştiriciler için kurulmuş, birlikte gelişen bir yazılımcı topluluğuyuz.</p>
        <div class="links">
            <a href="https://discord.gg/kEYXgAZndV" target="_blank" rel="noreferrer nofollow" class="button">Discord'da aramıza katıl &#8250;</a>
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
        color: #ffffff;
        background-color: #272727;
    }

    :global(body) {
        background: radial-gradient(circle, rgb(33, 27, 33) 0%, rgb(17, 22, 27) 100%);
        color: white;
        font-family: 'Roboto', sans-serif;
        max-width: 115ch;
        height: 100%;
        margin: 0 auto;
        padding: 0px 30px 0px 30px;
	}
    
    .logo {
        font-size: 20px;
        position: absolute;
        margin-top: calc(var(--spacing-unit) * 7);
    }

    img {
        width: 32px;
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
        font-weight: 500;
        font-size: 26px;
        margin: 0px;
    }

    .content-1 p {
        font-size: 20px;
        color: rgba(224, 231, 236, 0.7);
        margin: 0px;
    }

    .links {
        display: inline-block;
        padding: 20px 0px;
    }
    
    .button {
        background: linear-gradient(215deg, rgb(255, 173, 22) 0%,rgb(230, 14, 226) 100%);
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        border-radius: 18px 5px 18px 5px;
        padding: 10px 40px;
        margin: 0px;
        transition: ease-in-out 0.2s;
    }

    .button:hover {
        padding: 10px 44px;
        opacity: 0.75;
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
            margin: 5px 0px 0px 0px;
        }

        .links {
            padding: 0;
        }
    }
</style>
