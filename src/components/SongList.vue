<template>
  <div>
    <h4>List of Songs</h4>
    <ul>
      <li v-for="song in songs" :key="song.id">
        <p>Title: {{ song.title }}</p>
        <p>Artist: {{ song.artist }}</p>
        <button @click="addToPlaylist(song)">Add to playlist</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState('songlist', ['songs'])
    },
    methods: {
      ...mapActions('songlist', ['addSongToPlaylist']),
      addToPlaylist(value) {
        this.addSongToPlaylist(value)
      }
    }
  }
</script>

<style scoped>

</style>