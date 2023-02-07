<svelte:head>
	<title>Genç Yazılımcılar</title>
    <meta name="description" content="Genç yazılımcılar için genç bir topluluk.">
    <meta name="author" content="Genç Yazılımcılar">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
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
    
    <div class="content-1" style="text-align: left; height: 100%;">
        <h3>Genç Yazılımcılar Kimdir?</h3>
        <p>Genç Yazılımcılar bir topluluk projesidir. Amacımız ülkemizde bulunan yazılım ve bilgisayar alanında yüksek bilgiye sahip olan gençleri bir araya getirmektir.</p>
        <br>
        <h3>Neden Katılmalıyım?</h3>
        <p>Etkinlikler, çekilişler, yarışmalar, sosyal medya hesaplarımızdan yaptığınız projelerin yayını, çeşitli sponsorluklar ve sohbet ortamı, topluluğumuza ait özelliklerden bazılarıdır. Bize katılarak; tüm bu özelliklere erişim sağlıyor, Türkiye'nin ilk, gençler için gençler tarafından kurulmuş yazılım topluluğuna destek veriyorsunuz.</p>
    </div>
    <br>
</div>

<footer>
    <p>Genç Yazılımcılar &#169; 2023</p>
</footer>

<style>
    :global(:root) {
        --spacing-unit: 5px;
    }

    :global(::-webkit-scrollbar) {
        display: none;
    }

    :global(body) {
        background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgb(19, 16, 21) 0%, rgb(18, 15, 19) 100%);
        color: white;
        font-family: 'Poppins', sans-serif;
        max-width: 94ch;
        height: 100%;
        margin: 0 auto;
        padding-left: 30px;
        padding-right: 30px;
	}

    .logo {
        font-size: 18px;
        font-weight: bolder;
        position: relative;
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
        gap: 8px;
        height: 100vh;
    }

    .content-1 h1 {
        font-weight: bolder;
        font-size: 26px;
        margin: 0px;
    }

    .content-1 h3 {
        font-weight: bold;
        font-size: 22px;
        margin: 0px;
    }

    .content-1 p {
        font-size: 18px;
        line-height: 1.6;
        color: rgba(200, 200, 200, 0.6);
        margin: 0px;
    }

    .links {
        display: inline-block;
        padding: 20px 0px;
    }
    
    .button {
        background: linear-gradient(215deg, rgb(255, 201, 25) 0%, rgb(235, 10, 232) 100%);
        color: white;
        font-weight: bolder;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        border-radius: 20px;
        padding: 10px 22px;
        margin: 0px;
        transition: ease-in 0.1s;
    }
    .button:hover {
        padding: 10px 26px;
    }

    footer {
        font-style: italic;
        text-align: left;
        font-size: 16px;
        color: rgba(200, 200, 200, 0.4);
        margin: 30px 0px 30px 0px;
    }

    @media all and (max-width: 575px) {
        .content-1 h1 {
            text-align: left;
            font-size: 26px;
        }
        .content-1 h3 {
            text-align: left;
            font-size: 20px;
        }

        .content-1 p {
            text-align: left;
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
