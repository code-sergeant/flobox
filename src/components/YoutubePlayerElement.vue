<template id="youtube-player">
    <v-container fluid>
        <v-layout row>
            <v-flex>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0&origin=http://example.com"
  frameborder="0"></iframe>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'YoutubePlayer',
  methods: {
    // listSearchResults(response) {
    //   this.results.length = 0
    //   results.map(response)
    //     results.push({
    //     id: response.data.items[i].id.videoId,
    //     title: response.data.items[i].snippet.title,
    //     description: response.data.items[i].snippet.description,
    //     thumbnail: response.data.items[i].snippet.thumbnails.default.url,
    //     author: response.data.items[i].snippet.channelTitle
    //   })
    // }
  },
  data () {
    return {
      youtube: {
        ready: false,
        player: null,
        playerId: null,
        videoId: null,
        videoTitle: null,
        playerHeight: '480',
        playerWidth: '640',
        state: 'stopped'
      },
      results: [],
      upcoming: [],
      history: []
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>