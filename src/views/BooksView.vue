<template>
  <div class="books">
    Книги на русском
    <ul>
      <li>
        <a href="https://gitabase.com/rus/BG">БГ</a>
      </li>
    </ul>
    Книги на английском
    <ul>
      <li>
        <a href="https://gitabase.com/eng/BG72">БГ</a>
      </li>
    </ul>
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
}
</script>

<style scoped>

</style>