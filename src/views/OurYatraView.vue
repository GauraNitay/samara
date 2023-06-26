<template>
  <div class="yatra">
    <h1 v-if="!loadData">Загрузка информации...</h1>
    <div v-else class="yatra__inner">
      <h2 class="yatra__title">Изображения наших божеств</h2>
      <div class="images__vk">
        <img class="yatra__image" v-for="photo in photos" :key="photo.id" :src="photo.sizes[8].url" :alt="photo.title" />
      </div>
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
      loadData: false,
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
      finally {
        this.loadData = true
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.yatra {
  min-height: 100vh;
  text-align: center;
}

.yatra__title {
  margin-bottom: 30px;
}

.images__vk {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  img {
    width: 400px;
    border-radius: 4px;
    margin: 0 40px 40px;
    box-shadow: 0 0 20px rgba(45, 45, 45, 0.7);
  }
}
</style>