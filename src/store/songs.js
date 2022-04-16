export default {
  namespaced: true,
  state: {
    songs: [
      {
        id: 1,
        title: 'Woman',
        artist: 'Simi'
      },
      {
        id: 2,
        title: 'Somebody Son',
        artist: 'Tiwa'
      },
      {
        id: 3,
        title: 'ekuweme',
        artist: 'Osinachi'
      },
      {
        id: 4,
        title: 'peace of mind',
        artist: 'Tems'
      },
      {
        id: 5,
        title: 'bloody samaritan',
        artist: 'Ayrastar'
      }     
    ],
    playlists: []
  },
  mutations: {
    SAVE_PLAYLIST(state, payload) {
      var currentPlaylist = state.playlists
      currentPlaylist.push(payload)
      state.playlists = currentPlaylist
    },
    REMOVE_FROM_SONGLIST(state, payload) {
      var allSongs = state.songs
      const leftOverSongs = allSongs.filter((singleSong) => singleSong.id != payload.id)
      state.songs = leftOverSongs
    },
    REMOVE_FROM_PLAYLIST(state, payload) {
      var allPlaylistSongs = state.playlists
      const leftOverSongs = allPlaylistSongs.filter((singleSong) => singleSong.id != payload.id)
      state.playlists = leftOverSongs
    },
    ADD_BACK_TO_SONG(state, payload) {
      var currentSongs = state.songs
      currentSongs.push(payload)
      state.songs = currentSongs
    }
  },
  actions: {
    addSongToPlaylist({commit}, data) {
      commit("REMOVE_FROM_SONGLIST", data)
      commit("SAVE_PLAYLIST", data)
    },
    removeSongsFromPlaylist({commit}, data) {
      commit("REMOVE_FROM_PLAYLIST", data)
      commit("ADD_BACK_TO_SONG", data)
    }
  }
}