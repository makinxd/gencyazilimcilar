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
        <h3>• Genç Yazılımcılar Kimdir?</h3>
        <p>Genç Yazılımcılar bir topluluk projesidir. Amacımız ülkemizde bulunan ve yazılım alanında yüksek bilgiye sahip olan gençleri bir araya getirmektir.</p>
        <br>
        <h3>• Neden Katılmalıyım?</h3>
        <p>Topluluğumuza özel bazı özellikler bulunmaktadır. Özel etkinlikler, çekilişler, yarışmalar, sosyal medya hesaplarımızdan yaptığınız projelerin yayını ve çeşitli sponsorluklar, özelliklerden bazılarıdır.</p>
        <p>Bize katılarak; tüm bu özelliklere erişim sağlıyor, Türkiye'nin ilk, gençler için gençler tarafından kurulmuş yazılım topluluğuna destek veriyorsunuz.</p>
    </div>
    <br>
</div>

<footer>
    <p>Genç Yazılımcılar - 2023</p>
</footer>

<style>
    :global(:root) {
        --spacing-unit: 5px;
    }

    :global(::-webkit-scrollbar) {
        display: none;
    }

    :global(body) {
        background-color: rgb(11, 6, 12);
        color: white;
        font-family: 'Poppins', sans-serif;
        max-width: 110ch;
        height: 100%;
        margin: 0 auto;
        padding-left: 25px;
        padding-right: 25px;
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
        font-size: 26px;
        margin: 0px;
    }

    .content-1 h3 {
        font-size: 22px;
        margin: 0px;
    }

    .content-1 p {
        font-size: 20px;
        line-height: 1.6;
        color: rgba(247, 253, 255, 0.75);
        margin: 5px 0px 0px 0px;
    }

    .links {
        display: inline-block;
        padding: 20px 0px;
    }
    
    .button {
        background: linear-gradient(215deg, rgb(255, 194, 28) 0%, rgb(241, 20, 237) 100%);
        color: white;
        font-weight: bolder;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        border-radius: 12px;
        padding: 10px 24px;
        margin: 0px;
        transition: ease-in 0.1s;
    }
    .button:hover {
        opacity: 0.8;
    }

    footer {
        font-weight: bolder;
        color: #64686a;
        margin: 40px 0px 40px 0px;
    }

    @media all and (max-width: 575px) {
        .content-1 h1 {
            text-align: left;
            font-size: 24px;
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
