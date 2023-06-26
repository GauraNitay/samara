<template>
  <div class="wrapper">
    <h2>Изображения наших божеств</h2>
    <div class="images__vk" v-for="photo in photos" :key="photo.id">
      <img :src="photo.sizes[8].url" :alt="photo.title" />
    </div>
  </div>
</template>

<script>

import axios from "axios";
import { jsonp } from './jsonp';

export default {
  name: "OurYatraView",
  data() {
    return {
      photos: [],
    };
  },
  mounted() {
    this.getAlbumPhotos();
  },
  methods: {
    async getAlbumPhotos() {
      const groupId = '-181719831';
      const accessToken = 'vk1.a.VGcUQhHeGBUkuSzkZKUaqE-FV8YOyJ63KSdB2etTTHB_QEjG26w1dECtEx_CmMqlZSFTZ7Agie1grl6vxotG83hGQGKXFyEvKGhmECpjQKVG3Pyv-JAaMZmjgXN097UMUE5DrPHHABxNLV1y71okYm-mxMIK8Gx9f_WtPeyLm6aucfyit6QvkzhMDX7gz9UxBldPI4uwitiSB4mqYUpW_A'; // Ваш access token VK API
      // const url = `apiVk/photos.get?owner_id=${groupId}&album_id=263488057&access_token=${accessToken}&v=5.131`
      // try {
      //   const response = await axios.get(url,)
      //   this.photos = response.data.response.items
      // } catch (err) {
      //   console.log(err)
      // }

      const url = `https://api.vk.com/method/photos.get?owner_id=${groupId}&album_id=263488057&access_token=${accessToken}&v=5.131`
      try {
        const response = await jsonp(url);
        this.photos = response.response.items
        console.log(response.response.items); // Обрабатывайте данные по вашему усмотрению
      } catch (error) {
        console.error(error);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  text-align: center;
}
.images__vk {
  img {
    width: 500px;
  }
}
</style>