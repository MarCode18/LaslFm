<template lang="pug">
  #app
    img(src='./assets/logo.png')
    h1 Marcode LastFm 99.9
    ul
      artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
</template>


<script>
import Artist from './components/Artist.vue'
import getArtists from './api'


export default {
  name: 'app',
  data () {
    return {
      artists: []
    }
  },
  components: {
    Artist
  },
  mounted: function () {
    const self = this
    getArtists()
      .then(function (artists) {
        self.artists = artists
      })
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fbfdff;
  margin-top: 10px;
  background: #2a3d50;
  
}
</style>
