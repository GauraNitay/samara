<template>
  <div class="books">
    <div class="books__inner">
      <h1 class="books__title">Вайшнавская литература</h1>
      <div class="books__shelf">
        <div class="shelf">
          <h2>Книги на русском</h2>
          <div class="container">
            <ul>
              <li>
                <a href="https://gitabase.com/rus/BG">
                  <img src="@/assets/BG.jpeg" alt="Бхагавад-Гита">
                  <span>Бхагавад-Гита</span>
                </a>
              </li>
              <li>
                <a href="https://gitabase.com/rus/ISO">
                  <img src="@/assets/SI.jpeg" alt="Шри Ишопанишад">
                  <span>Шри Ишопанишад</span>
                </a>
              </li>
              <li>
                <a href="https://gitabase.com/rus/TLC">
                  <img src="@/assets/UGCH.jpeg" alt="Учение Господа Чайтаньи">
                  <span>Учение Шри Чайтаньи</span>
                </a>
              </li>
              <li>
                <a href="https://gitabase.com/rus/NOD">
                  <img src="@/assets/NP.jpeg" alt="Нектар преданности">
                  <span>Нектар преданности</span>
                </a>
              </li>
            </ul>
            <div class="rotate_shelf"></div>
            <div class="front"></div>
          </div>
<!--          <div class="container">-->
<!--            <div style="display: flex">-->
<!--              <img src="@/assets/NP.jpeg" style="height: 170px; margin-left: 50px;-->
<!--              padding: 20px; background-color: beige; border-radius: 4px; box-shadow: 0 0 10px white; z-index: 2;" alt="Нектар преданности">-->
<!--              <img src="@/assets/NP.jpeg" style="height: 170px; margin-left: 50px;-->
<!--              padding: 20px; background-color: beige; border-radius: 4px; box-shadow: 0 0 10px white; z-index: 2;" alt="Нектар преданности">-->
<!--            </div>-->
<!--            <div class="rotate_shelf">-->

<!--            </div>-->
<!--          </div>-->
          <div class="container">
            <ul>
              <li>
                <a href="https://gitabase.com/rus/NOI">
                  <img src="@/assets/NN.jpeg" alt="Нектар наставлений">
                  <span>Нектар наставлений</span>
                </a>
              </li>
              <li>
                <a href="https://gitabase.com/rus/BS">
                  <img src="@/assets/BS.jpeg" alt="Брахма самхита">
                  <span>Брахма самхита</span>
                </a>
              </li>
              <li>
                <a href="https://gitabase.com/rus/TQK">
                  <img src="@/assets/MCK.jpeg" alt="Молитвы царицы кунти">
                  <span>Молитвы царицы кунти</span>
                </a>
              </li>
              <li>
                <a href="https://gitabase.com/rus/KB">
                  <img src="@/assets/K.jpeg" alt="Кришна">
                  <span>Кришна</span>
                </a>
              </li>
            </ul>
            <div class="rotate_shelf"></div>
            <div class="front"></div>
          </div>

          <h3>Шримад Бхагаватам</h3>
          <div v-for="i in 3" class="container">
            <ul>
              <li v-for="j in 4">
                <a :href="getLink(j+(i-1)*4)">
                  <img :src="require('@/assets/SB'+(j+(i-1)*4)+'.jpeg')" alt="Шримад Бхагаватам">
                  <span>Песнь {{j+(i-1)*4}}</span>
                </a>
              </li>
            </ul>
            <div class="rotate_shelf"></div>
            <div class="front"></div>
          </div>
        </div>
      </div>

      <div class="books__shelf">
        <div class="shelf">
          <h2>Книги на английском</h2>
          <ul>
            <li>
              <a href="https://gitabase.com/eng/BG">
                <img src="@/assets/BG.jpeg" alt="Bhagavad-Gita">
                <span>Bhagavad-Gita</span>
              </a>
            </li>
            <li>
              <a href="https://gitabase.com/eng/ISO">
                <img src="@/assets/SI.jpeg" alt="Sri Ishopanishad">
                <span>Sri Isopanishad</span>
              </a>
            </li>
            <li>
              <a href="https://gitabase.com/eng/TLC">
                <img src="@/assets/UGCH.jpeg" alt="Teachings of Lord Caitanya">
                <span>Teachings of Lord Caitanya</span>
              </a>
            </li>
            <li>
              <a href="https://gitabase.com/eng/NOD">
                <img src="@/assets/NP.jpeg" alt="Nectar of Devotion">
                <span>Nectar of Devotion</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://gitabase.com/eng/NOI">
                <img src="@/assets/NN.jpeg" alt="Nectar of Instruction">
                <span>Nectar of Instruction</span>
              </a>
            </li>
            <li>
              <a href="https://gitabase.com/eng/BS">
                <img src="@/assets/BS.jpeg" alt="Sri Brahma-Samhita">
                <span>Sri Brahma-Samhita</span>
              </a>
            </li>
            <li>
              <a href="https://gitabase.com/eng/TQK">
                <img src="@/assets/MCK.jpeg" alt="Teachings of Queen Kunti">
                <span>Teachings of Queen Kunti</span>
              </a>
            </li>
            <li>
              <a href="https://gitabase.com/eng/KB">
                <img src="@/assets/K.jpeg" alt="Krishna Book">
                <span>Krishna Book</span>
              </a>
            </li>
          </ul>
          <h3>Shrimad Bhagavatam</h3>
          <ul v-for="i in 3">
            <li v-for="j in 4">
              <a :href="getLinkA(j+(i-1)*4)">
                <img :src="require('@/assets/SBa'+(j+(i-1)*4)+'.jpeg')" alt="Shrimad Bhagavatam">
                <span>Canto {{j+(i-1)*4}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BooksView",
  data() {
    return {
      items: [],
    }
  },
  mounted() {
  },
  methods: {
    getLink(i) {
      return `https://gitabase.com/rus/SB/${i}`
    },
    getLinkA(i) {
      return `https://gitabase.com/eng/SB/${i}`
    }
  }
}
</script>

<style lang="scss" scoped>

$mainC: #2c3e50;
$activeC: #fa860f;

.books__title {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  width: max-content;
  margin: 0 auto 20px;
  border: 1px solid #dca669;
  //border-top-left-radius: 4px;
  //border-top-right-radius: 4px;
  border-radius: 4px;
  background-color: #d5b2a0;
  box-shadow: inset 0 0 5px rgba(40, 40, 40, 0.9);
  padding: 10px 30px;
}

h3 {
  width: max-content;
  margin: 0 auto 10px;
}

.shelf {
  width: 100%;
  padding: 20px;
  margin-bottom: 50px;
  background-color: #725b55;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(40, 40, 40, 0.5);
}
.container {
  position: relative;
  perspective: 200px;
  margin: 0 40px;
  //background: rgba(195,209,212);
  border-radius: 5px;
  transform-style: flat;
}
.rotate_shelf {
  margin: 0 auto;
  position: absolute;
  height: 47px;
  //width: 890px;
  width: 100%;
  top: 262px;
  //left: 35px;
  border-radius: 5px;
  transform: rotateX(45deg);
  background: #70442d;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.5);
  border: 1px solid #484747;
}
.front {
  width: 100%;
  height: 9px;
  border: 1px solid #484747;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: #70442d;
  transform: translate3d(0, -52px, 15.3px);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
}

ul {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
  border: 1px solid #dca669;
  border-radius: 4px;
  background-color: #b78770;
  margin-bottom: 40px;
  box-shadow: inset 0 0 30px rgb(12, 12, 12, 0.9);
}
ul:last-child {
  margin-bottom: 0;
}
ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 232px;
  margin: 20px;
  border-radius: 4px;
  background-color: #f8ddd1;
  box-shadow: 0 1px 15px #f6ab6e;
  z-index: 2;
  &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
    background-color: #f1c9b9;
  }
  &:active {
    background-color: #e3baaa;
    box-shadow: 0 0 1px #f6ab6e;
  }
}
ul li img {
  height: 170px;
  margin-bottom: 10px;
}
ul li a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 10px;
  line-height: 16px;
}

</style>