<template>
  <div class="footer">
    <div class="footer__inner wrapper">
      <div class="footer__info">
        <div class="footer__contacts">
          <p class="footer__address">Аэропортовское шоссе, дом 122 <br> пос. Зубчаниновка</p>
          <p class="footer__phone">
            Председатель храма – <br>
            Вриндаван Чандра дас: <br>
            <a class="phone" href="tel:79999999999">+7 (927) 746-79-19</a>
          </p>
          <p class="footer__transport">Остановка "Краснопресненская" <br> проезд автобусами: 7,74,75 <br> маршрутками: 80,124,126,240,480</p>
        </div>
        <div class="footer__socials">
          <p>Социальные сети:</p>
          <div class="socials__container">
            <a href="https://vk.com/samarskiy_centr_iskcon" class="vkontakte">Вконтакте: Основной</a>
            <a href="https://vk.com/harinamasamara" class="vkontakte">Вконтакте: Харинамы</a>
            <a href="https://www.youtube.com/@krishna-samara" class="youtube">YouTube</a>
            <a href="https://t.me/samaraosk" class="telegram">Телеграм</a>
          </div>
        </div>
        <iframe class="footer__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.7249764966036!2d50.32629641583438!3d53.24070617995696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41661a1668674e1f%3A0x9ba0641363022347!2z0JDRjdGA0L7Qv9C-0YDRgtC-0LLRgdC60L7QtSDRiC4sIDEyMiwg0KHQsNC80LDRgNCwLCDQodCw0LzQsNGA0YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCA0NDMwNTA!5e0!3m2!1sru!2sus!4v1687521138151!5m2!1sru!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
      <div class="footer__copyright">
        <p>Повторяйте Харе Кришна и будьте счастливы!</p>
        <p>© 2023 Самарское общество сознания Кришны. Все права защищены.</p>
<!--        <p>Дизайн: <a href="https://vk.com/ii_malinin">Igor Malinin</a></p>-->
      </div>
  </div>
</template>

<script>
export default {
  name: "footer-cp"
}
</script>

<style lang="scss" scoped>

$mainC: #2c3e50;
$activeC: #fa860f;
$whiteC: #fffefc;

.footer {
  margin-top: 30px;
  //border-top: 2px solid $mainC;
  padding-top: 20px;
  background-color: $mainC;
  //box-shadow: inset 0 2px 10px 0 #7a7a7a;
}
a {
  color: $whiteC;
}

.footer__inner {
  height: 100%;
  .footer__info {
    //border: 2px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer__contacts {
      p {
        margin-bottom: 10px;
        padding-left: 50px;
        color: $whiteC;
        //border: 2px solid black;
      }
      .footer__address:before {
        position: absolute;
        font-family: "icomoon";
        content: "\f015";
        font-size: 25px;
        left: 10px;
        line-height: 43px;
        color: $activeC;
      }
      .footer__address {
        position: relative;
      }

      .footer__phone:before {
        position: absolute;
        font-family: "icomoon";
        content: "\f095";
        font-size: 25px;
        left: 10px;
        line-height: 65px;
        color: $activeC;
      }
      .footer__phone {
        position: relative;
      }

      .footer__transport:before {
        position: absolute;
        font-family: "icomoon";
        content: "\f207";
        font-size: 25px;
        left: 10px;
        line-height: 65px;
        color: $activeC;
      }
      .footer__transport {
        position: relative;
      }
    }
  }
  .footer__map {
    min-width: 400px;
    min-height: 200px;
    border: none;
  }
}

.footer__socials {
  p {
    padding-left: 0 !important;
    color: $whiteC;
  }
  .socials__container {
    display: flex;
    flex-direction: column;
    a {
      padding-left: 40px;
      line-height: 40px;
    }
    .vkontakte:before {
      position: absolute;
      font-family: "icomoon";
      content: "\f189";
      font-size: 25px;
      line-height: 40px;
      top: 0;
      left: 0;
      color: $activeC;
    }
    .vkontakte {
      position: relative;
    }
    .youtube:before {
      position: absolute;
      font-family: "icomoon";
      content: "\f16a";
      font-size: 25px;
      line-height: 40px;
      left: 0;
      color: $activeC;
    }
    .youtube {
      position: relative;
    }
    .telegram:before {
      position: absolute;
      font-family: "icomoon";
      content: "\f2c6";
      font-size: 25px;
      line-height: 40px;
      left: 0;
      color: $activeC;
    }
    .telegram {
      position: relative;
    }
  }
}

.footer__copyright {
  padding: 20px 0;
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  p {
    color: #b0d3f8;
  }
  //background-color: #e0ebf6;
}

</style>