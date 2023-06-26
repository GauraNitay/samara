<template>
  <header-cp></header-cp>
  <router-view class="wrapper"/>
  <footer-cp></footer-cp>
</template>

<script>
import HeaderCp from "@/components/HeaderCp.vue";
import FooterCp from "@/components/FooterCp.vue";

export default {
  components: {
    FooterCp, HeaderCp
  },

}
</script>

<style lang="scss">

@font-face {
  font-family: 'icomoon';
  src:  url('@/fonts/icomoon.eot?bc57xb');
  src:  url('@/fonts/icomoon.eot?bc57xb#iefix') format('embedded-opentype'),
  url('@/fonts/icomoon.ttf?bc57xb') format('truetype'),
  url('@/fonts/icomoon.woff?bc57xb') format('woff'),
  url('@/fonts/icomoon.svg?bc57xb#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-home:before {
  content: "\f015";
}
.icon-phone:before {
  content: "\f095";
}
.icon-bus:before {
  content: "\f207";
}
.icon-vk:before {
  content: "\f189";
}
.icon-youtube-play:before {
  content: "\f16a";
}
.icon-telegram:before {
  content: "\f2c6";
}
.icon-play:before {
  content: "\f04b";
}

$mainC: #2c3e50;
$activeC: #fa860f;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: $mainC;
  list-style: none
}
a {
  text-decoration: none;
}
a:hover {
  color: #da610b;
}
a:active {
  color: #7e3400;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: 500;
}

.wrapper {
  width: 1080px;
  margin: 0 auto;
}
</style>
