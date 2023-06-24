<template>
  <div class="header">
    <div class="header__inner">
      <div class="img_n_caption">
        <img class="header__img" src="@/assets/ACBSPrabhupada2.png" alt="ACBSPrabhupada">
        <p>Его Божественная Милость А.Ч. Бхактиведанта Свами Прабхупада, ачарья-основатель Международного общества сознания Кришны</p>
      </div>
      <nav>
        <img class="delim" src="@/assets/delimeter.png">
        <router-link class="router__link" to="/">Главная</router-link>
        <img class="delim" src="@/assets/delimeter.png">
        <router-link class="router__link" to="/news">Новости</router-link>
        <img class="delim" src="@/assets/delimeter.png">
        <router-link to="/philosophy">Философия</router-link>
        <img class="delim" src="@/assets/delimeter.png">
        <router-link to="/ouryatra">Наша ятра</router-link>
        <img class="delim" src="@/assets/delimeter.png">
        <router-link to="/contacts">Контакты</router-link>
        <img class="delim" src="@/assets/delimeter.png">
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-cp"
}
</script>

<style lang="scss" scoped>

$mainC: #2c3e50;
$activeC: #fa860f;

.header {
  margin: 30px 0;
}

.header__inner {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  //border: 1px solid black;
}

.img_n_caption {
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  //border: 1px solid black;
  margin-right: 50px;
  .header__img {
    width: 160px;
    margin-right: 10px;
  }
  p {
    font-size: 14px;
    line-height: 15px;
  }
}

nav {
  display: flex;
  align-items: center;
  padding: 30px;
  align-self: center;
  //border: 1px solid black;
  a {
    margin: 0 20px;
    font-weight: bold;
    border-top: 2px solid $mainC;
    border-bottom: 2px solid $mainC;
    padding: 3px 0;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      padding: 6px 0;
      color: $mainC;
    }
    &.router-link-exact-active {
      color: #fa860f;
      padding: 3px 8px;
      border-top: none;
      border-bottom: none;
      border-left: 2px solid $activeC;
      border-right: 2px solid $activeC;
    }
  }
  a:last-child {
    margin-right: 0;
  }
  .delim {
    width: 10px;
  }
}

</style>