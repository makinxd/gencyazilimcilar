<div class="container">
    <div class="content-1" style="text-align: left;">
        <h1>🎉 Çekilişler, etkinlikler yarışmalar ve daha fazlası!</h1>
        <p>Özel etkinlikler ve yarışmalarımız ile kendimizi diğer sunuculardan ayırıyoruz.</p>
    </div>
</div>

<div class="container">
    <div class="content-1" style="text-align: right;">
        <h1>🦄 Başarılı üyelerimize özel roller!</h1>
        <p>Belirli bir alanda yaratıcı proje paylaşmış veya başarı göstermiş üyelerimize özel roller veriyoruz.</p>
    </div>
</div>

<div class="container">
    <div class="content-1" style="text-align: left;">
        <h1>✨ Kendini geliştirebilmen için mükemmel bir mekân!</h1>
        <p>Amacımız bilgi paylaşımı ile ülkemizin üretici neslinin gelişmesini sağlamaktır.</p>
    </div>
</div>

<style>
    .container {
        height: 16vh;
    }
    .content-1 {
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-weight: lighter;
        height: 8vh;
        background-color: rgba(255, 255, 255, 0.02);
        padding: 30px;
        margin: 10px;
        gap: 12px;
        border-radius: 15px;
    }
    .content-1 h1 {
        font-size: 22px;
        margin: 0;
        line-height: 1.3;
    }
    .content-1 p {
        font-size: 20px;
        margin: 0;
        line-height: 1.3;
        opacity: 0.5;
    }

    @media all and (max-width: 575px) {
        .container {
            height: 45vh;
        }

        .content-1 {
            height: 35vh;
            padding: 15px;
            margin: 0px;
        }

        .content-1 h1 {
            text-align: center;
        }

        .content-1 p {
            font-size: 18px;
            text-align: center;
        }
    }
</style>