<template>
  <div class="Home">
    <h3>Search Comic API</h3>
    <ComicList/>
    <h3>by: Ismael Bolaños Garcìa</h3>
  </div>
</template>

<script>
import ComicList from './ComicList'
export default {
  name: 'Home',
  data() {
    return {
    };
  },
  components: {
    ComicList
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Home{
  background: #bd1023;
  color: white;
  width: 100%;
}
h1,h2,h3 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  font-weight: 300;
  height: 50px;
}
</style>
