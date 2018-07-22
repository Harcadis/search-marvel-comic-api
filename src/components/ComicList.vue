<template>
  <div id="ComicList">
      <input type="text" :placeholder="'comic name....'" v-model="tempName" @keypress.enter="actualizar()">
      <ul>
          <li v-for="comic in comics" :key="comic.name">
              <h5>{{comic.title}}</h5>
              <img :src="comic.images.length > 0 ? comic.images[0].path + '.' + comic.images[0].extension : 'url'"  alt="">
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ComicList',
  data() {
      return {
        tempName: '',
        url: `http://gateway.marvel.com/v1/public/comics?title=`,
        comics: [],
        tempComics: [],
      }
  },
  created() {
    this.actualizar()
  },
  methods:{
    actualizar() {
        axios.get(this.url + this.tempName + `&apikey=a4ea2867333c5770f8cf927963b75551&&hash=8cd7abad0075987b85770ff9a07bfa88&&ts=1`)
        .then(res => (this.comics = res.data.data.results))
        .catch()
    }
  }
};

</script>

<style scoped>
#ComicList{
    background-color: #4e4e4e;
    width: 100%;
}
ul {
    height: 800px;t
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    margin: 0px;
}
img {
    width: 200px;
    height: 300px;
}
input {
  width: 100%;
  height: 50px;
  padding: 0px;
  border: 0px solid white;
}
</style>