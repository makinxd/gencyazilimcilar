<svelte:head>
	<title>Genç Yazılımcılar</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</svelte:head>

<div class="logo">
    <img style="vertical-align: middle" src="assets/logo/gyazilimcilarlogo.png" alt=""/>
    <span style="vertical-align: middle"> Genç Yazılımcılar</span>
</div>

<div class="content-1">
    <h1>Genç geliştiriciler için genç bir topluluk.</h1>
    <p>Yeni nesil geliştiriciler için kurulmuş, birlikte gelişen bir yazılımcı topluluğuyuz.</p>
    <div class="links">
        <a href="https://discord.gg/kEYXgAZndV" target="_blank" rel="noopener noreferrer" class="button">Discord'da bize katıl &#8250;</a>
        <a href="https://twitter.com/gyazilimcilar/" target="_blank" rel="noopener noreferrer" class="button" style="background: transparent; box-shadow:inset 0px 0px 0px 3px #ffffff;">Twitter'da bizi takip et</a>
    </div>
</div>

<style>
    :global(:root) {
        --spacing-unit: 5px;
    }

    :global(::-webkit-scrollbar) {
        display: none;
    }

    :global(body) {
		background-image: url('./assets/background/background.jpg');
        color: white;
        font-family: 'Poppins', sans-serif;
        max-width: 120ch;
        height: 100%;
        margin: 0 auto;
        padding-left: 30px;
        padding-right: 30px;
	}

    .logo {
        color: white;
        font-size: 18px;
        font-weight: bolder;
        position: relative;
        text-align: left;
        margin-top: calc(var(--spacing-unit) * 7);
    }

    img {
        width: 32px;
    }

    .content-1 {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 84vh;
    }

    .content-1 h1 {
        color: white;
        font-size: 30px;
        margin: 0;
    }

    .content-1 p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 20px;
        margin: 12px 0px 12px 0px;
    }

    .links {
        text-align: left;
        display: inline-block;
        padding: 20px 0px;
    }
    
    .button {
        background: linear-gradient(215deg, rgba(249,175,37,1) 0%, rgba(219,31,216,1) 100%);
        color: white;
        font-weight: bolder;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        border-radius: 16px;
        padding: 12px 24px;
        margin: 20px 10px 0px 0px;
        transition: ease-in 0.1s;
    }
    .button:hover {
        padding: 12px 28px;
        opacity: 0.85;
    }

    @media all and (max-width: 575px) {
        .logo {
            text-align: center;
        }

        .content-1 h1 {
            font-size: 28px;
        }

        .content-1 p {
            font-size: 18px;
        }

        .button {
            display: block;
            padding: 10px 24px;
            margin: 18px 0px 0px 0px;
        }

        .links {
            padding: 0;
        }
    }  
</style>
