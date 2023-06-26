<template>
  <div class="news">
    <div class="news__inner">
      <h1 class="news__title">Посты группы "Самарский центр ИСККОН"</h1>
      <h2 v-if="!load_posts">Загрузка постов...</h2>
      <div v-else class="posts__container">
        <ul>
          <li class="post" v-for="(post, index) in posts" :key="post.id">
            <pre v-if="post.text" class="post__text">{{ post.text }}</pre>
            <div v-if="post.attachments && post.attachments.length > 0">
              <img class="post__image" v-for="attachment in post.attachments" :key="attachment.photo.id" :src="attachment.photo.sizes[3].url" alt="Фото">
            </div>
            <div class="post__forwarded" v-if="post.copy_history && post.copy_history.length > 0">
              <div v-for="forwardedPost in post.copy_history" :key="forwardedPost.id">
                <h3>Пересланная запись</h3>
                <pre v-if="forwardedPost.text" class="post__text">{{ forwardedPost.text }}</pre>
                <div v-if="forwardedPost.attachments && forwardedPost.attachments.length > 0">
                  <div class="post__forwarded_attachments" v-for="attachment in forwardedPost.attachments">
                    <img class="post__image" v-if="attachment.photo" :src="attachment.photo.sizes[3].url" alt="Фото">
                    <div class="post__video" v-if="attachment.video" :key="attachment.video.id">
                      <a class="video__link" :href="getVideoUrl(attachment.video)">
                        <img class="post__image" :src="attachment.video.image[3].url" alt="Видео">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="post__date">{{ formatDate(post.date) }}</p>
          </li>
        </ul>
        <p class="rest_posts">
          Остальные посты вы можете посмотреть в сообществе Вконтаке:
        </p>
        <a class="vkontakte" href="https://vk.com/samarskiy_centr_iskcon">Самарский Центр Общества Сознания Кришны</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { jsonp } from './jsonp';

export default {
  name: "NewsView",
  data() {
    return {
      posts: [],
      forwardedPosts: [],
      videos: [],
      load_posts: false,
      i: 0
    };
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    async getPosts() {
      const ownerId = '-181719831';
      const accessToken = 'vk1.a.VGcUQhHeGBUkuSzkZKUaqE-FV8YOyJ63KSdB2etTTHB_QEjG26w1dECtEx_CmMqlZSFTZ7Agie1grl6vxotG83hGQGKXFyEvKGhmECpjQKVG3Pyv-JAaMZmjgXN097UMUE5DrPHHABxNLV1y71okYm-mxMIK8Gx9f_WtPeyLm6aucfyit6QvkzhMDX7gz9UxBldPI4uwitiSB4mqYUpW_A'; // Ваш access token VK API
      const url = `https://api.vk.com/method/wall.get?owner_id=${ownerId}&access_token=${accessToken}&v=5.131`
      try {
        const response = await jsonp(url);
        this.posts = response.response.items;
      } catch (error) {
        console.error(error);
      } finally {
        this.load_posts = true
      }
    },
    formatDate(date) {
      // Функция для форматирования даты
      const options = {year: 'numeric', month: 'long', day: 'numeric'};
      return new Date(date * 1000).toLocaleDateString('ru-RU', options);
    },
    getVideoUrl(video) {
      // const accessToken = 'vk1.a.VGcUQhHeGBUkuSzkZKUaqE-FV8YOyJ63KSdB2etTTHB_QEjG26w1dECtEx_CmMqlZSFTZ7Agie1grl6vxotG83hGQGKXFyEvKGhmECpjQKVG3Pyv-JAaMZmjgXN097UMUE5DrPHHABxNLV1y71okYm-mxMIK8Gx9f_WtPeyLm6aucfyit6QvkzhMDX7gz9UxBldPI4uwitiSB4mqYUpW_A'
      // const ownerId = video.owner_id;
      // const videoId = video.id;
      // const url = `https://api.vk.com/method/video.get?owner_id=${ownerId}&videos=${ownerId}_${videoId}&access_token=${accessToken}&v=5.131`
      // try {
      //   const response = await jsonp(url);
      //   console.log(response)
      //   this.videos.push(response.response.items[0].player)
      // }
      // catch (error) {
      //   console.log(error)
      // }
      console.log(video)
      const ownerId = video.owner_id
      const videoId = video.id
      return `https://vk.com/video${ownerId}_${videoId}`
    },
  },
}
</script>

<style lang="scss" scoped>

.news {
  min-height: 100vh;
}

.news__inner {
  width: 100%;
  text-align: center;
}

.news__title {
  margin-bottom: 30px;
}

.post {
  width: 900px;
  margin: 0 auto;
  padding: 30px 40px;
  margin-top: 50px;
  box-shadow: 0 0 30px rgba(122, 122, 122, 0.3);
  border-radius: 4px;
  background-color: #fffefc;
  h3 {
    margin-bottom: 20px;
  }
}

.post__forwarded_attachments {
  border-radius: 4px;
  max-width: 700px;
  max-height: 500px;
  margin: 0 auto 20px;
  line-height: 0;
}
.post__forwarded_attachments:last-child {
  margin-bottom: 0;
}

.post__image {
  max-height: 500px;
  max-width: 700px;
  border-radius: 4px;
}

.post__video {
  background-color: rgba(0, 0, 0, 0.80);
  line-height: 0;
  border-radius: 4px;
}

.video__link:before {
  position: absolute;
  font-family: "icomoon";
  content: "\f04b";
  font-size: 60px;
  color: rgba(255, 254, 252, 0.7);
  left: 0;
  right: 0;
  top: 50%;
}
.video__link {
  display: inline-block;
  position: relative;
  line-height: 0;
}

.post__text {
  font-size: 15px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  box-shadow: inset 0 0 6px rgba(122, 122, 122, 0.4);;
  white-space: pre-wrap;       /* Since CSS 2.1 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
}

.post__date {
  margin-top: 20px;
}

.rest_posts {
  margin-top: 30px;
}
.vkontakte:before {
  line-height: 17px;
  color: #0a4db0;
}
.vkontakte {
  padding-left: 35px;
  line-height: 30px;
  &:hover {
    &:before {
      color: #4385e7;
    }
  }
}

</style>