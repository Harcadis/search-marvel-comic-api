<template>
  <div id="ComicList">
      <input type="text" :placeholder="'comic name....'" v-model="tempName" @keypress.enter="start()">
      <ul class="imagenes">
          <li v-for="comic in comics" :key="comic.name">
              <h5>{{comic.title}}</h5>
              <a :href="'/#/comicInfo/' + comic.id" ><img :src="comic.images.length > 0 ? comic.images[0].path + '.' + comic.images[0].extension : 'http://placeimg.com/640/480/any'"  alt=""></a>
          </li>
      </ul>
      <ul class="footer">
          <li v-for="pagina in paginas" :key="pagina.numero" @click="actualizar(pagina)">{{pagina.numero}}</li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ComicList',
  props: ['numero'],
  data() {
      return {
        tempName: '',
        url: `http://gateway.marvel.com/v1/public/comics?title=`,
        urlg : `http://gateway.marvel.com/v1/public/comics?`,
        comics: [],
        comicsTotales: [],
        tempComics: [],
        paginas: []
      }
  },
  created() {
    axios.get(this.urlg + `&limit=10&apikey=a4ea2867333c5770f8cf927963b75551&&hash=8cd7abad0075987b85770ff9a07bfa88&&ts=1`)
        .then(res => {
            this.comics = res.data.data.results
        })
        .catch()
  },
  methods:{
    actualizar(pagina) {
        const numero = (pagina.numero - 1) * 10 ;
        axios.get(this.url + this.tempName + `&limit=10` + `&offset=` + numero + `&apikey=a4ea2867333c5770f8cf927963b75551&&hash=8cd7abad0075987b85770ff9a07bfa88&&ts=1`)
        .then(res => {
            this.comics =  []
            this.comics = res.data.data.results
        })
        .catch()
    },
    start() {
        axios.get(this.url + this.tempName + `&limit=10&apikey=a4ea2867333c5770f8cf927963b75551&&hash=8cd7abad0075987b85770ff9a07bfa88&&ts=1`)
        .then(res => {
            this.comics =  []
            this.paginas = []
            this.comics = res.data.data.results
            let i = 0;
            while(i < res.data.data.total){
                this.paginas.push({numero:this.paginas.length+1})
                i = i + 10;
            }
        })
        .catch()
    }
  }
};
// &offset=
</script>

<style scoped>
#ComicList{
    background-color: #4e4e4e;
    width: 100%;
}
ul.imagenes {
    height: 800px;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    margin: 0px;
}
ul.footer {
    height: 50px;
    list-style: none;
    margin: 0px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
}
ul.footer li{
    margin-left: 10px;
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