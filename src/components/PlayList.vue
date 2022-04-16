<template>
  <div>
    <h4>My Playlist</h4>
    <ul v-if="playlists.length > 0">
      <li v-for="song in playlists" :key="song.id">
        <p>Title: {{ song.title }}</p>
        <p>Artist: {{ song.artist }}</p>
        <button @click="removeSong(song)">Remove from playlist</button>
      </li>
    </ul>
    <p v-else>Playlist is empty</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapState('songlist', ['playlists'])
    },
    methods: {
      ...mapActions('songlist', ['removeSongsFromPlaylist']),
      removeSong(value) {
        this.removeSongsFromPlaylist(value)
      }
    }
  }
</script>

<style scoped>

</style>