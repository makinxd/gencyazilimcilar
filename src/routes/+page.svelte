<svelte:head>
	<title>Genç Yazılımcılar</title>
    <meta name="description" content="Genç yazılımcılar için genç bir topluluk.">
    <meta name="author" content="Genç Yazılımcılar">
</svelte:head>

<div class="logo">
    <img style="vertical-align: middle" src="images/logo/gyazilimcilarlogo.png" alt="logo"/>
    <span style="vertical-align: middle"> Genç Yazılımcılar</span>
</div>

<div class="container">
    <div class="content-1" style="text-align: left;">
        <h1>Genç geliştiriciler için genç bir topluluk.</h1>
        <p>Yeni nesil geliştiriciler için kurulmuş, birlikte gelişen bir yazılımcı topluluğuyuz.</p>
        <div class="links">
            <a href="https://discord.gg/kEYXgAZndV" target="_blank" rel="noreferrer nofollow" class="button">Discord'da aramıza katıl &#8250;</a>
        </div>
    </div>
    
    <div class="content-1" style="text-align: left; height: 100%; margin-top: 25px; background: rgba(255, 235, 255, 0.045); border-radius: 18px; padding: 20px; box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 12px;">
        <h3>Genç Yazılımcılar Kimdir?</h3>
        <p>Genç Yazılımcılar bir topluluk projesidir. Amacımız ülkemizde bulunan yazılım ve bilgisayar alanında yüksek bilgiye sahip olan gençleri bir araya getirmektir.</p>
        <br>
        <h3>Neden Katılmalıyım?</h3>
        <p>Etkinlikler, çekilişler, yarışmalar, sosyal medya hesaplarımızdan yaptığınız projelerin yayını, çeşitli sponsorluklar ve sohbet ortamı, topluluğumuza ait özelliklerden bazılarıdır. Bize katılarak; tüm bu özelliklere erişim sağlıyor, Türkiye'nin ilk, gençler için gençler tarafından kurulmuş yazılım topluluğuna destek veriyorsunuz.</p>
    </div>
</div>
<br>

<style>
    :global(:root) {
        --spacing-unit: 5px;
    }

    :global(::-webkit-scrollbar) {
        display: none;
    }

    :global(::selection) {
        color: #ffffff;
        background-color: #2b192b;
    }

    :global(body) {
        background: radial-gradient(circle, rgb(39, 32, 39) 0%, rgb(18, 23, 33) 100%);
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        max-width: 118ch;
        height: 100%;
        margin: 0 auto;
        padding: 0px 20px 0px 20px;
	}
    
    .logo {
        font-size: 22px;
        position: absolute;
        font-weight: lighter;
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
        gap: 10px;
        height: 100vh;
    }

    .content-1 h1 {
        font-weight: lighter;
        font-size: 28px;
        margin: 0px;
    }

    .content-1 h3 {
        font-weight: lighter;
        font-size: 22px;
        margin: 0px;
    }

    .content-1 p {
        font-size: 20px;
        line-height: 1.7;
        color: rgba(227, 237, 241, 0.65);
        margin: 0px;
    }

    .links {
        display: inline-block;
        padding: 20px 0px;
    }
    
    .button {
        background: linear-gradient(215deg, rgb(255, 189, 22) 0%, rgb(230, 14, 226) 100%);
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        border-radius: 2px 18px 2px 18px;
        padding: 9px 36px;
        margin: 0px;
        transition: ease-in-out 0.2s;
    }

    .button:hover {
        padding: 9px 40px;
        opacity: 0.7;
    }

    @media all and (max-width: 575px) {
        .content-1 h1 {
            text-align: left;
        }
        .content-1 h3 {
            text-align: left;
        }

        .content-1 p {
            text-align: left;
            font-size: 18px;
        }

        .button {
            display: block;
            margin: 18px 0px 0px 0px;
        }

        .links {
            padding: 0;
        }
    }
</style>
