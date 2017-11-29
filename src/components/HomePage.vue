<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 md6 class="m-0">
        <v-card dark height="810px">
          <v-toolbar dark :class="{'red darken-3': e2 === 0, 'orange darken-3': e2 === 1}">
            <v-toolbar-title v-show="e2===0">Take Notes from YouTube</v-toolbar-title>
            <v-toolbar-title v-show="e2===1">Take Notes from Audible</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>search</v-icon>
          </v-toolbar>
          <v-card v-show="e2===0">
  
            <!-- Youtube Player Start-->
            <youtube-player></youtube-player>
            <!-- Youtube Player End-->
  
            <v-divider></v-divider>
  
            <v-card-text id="videoNoteFields">
              <v-text-field dark label="Enter tag name for this note" v-model="videoNoteTag" :rules="[() => videoNoteTag.length > 0 || 'This field is required']" required></v-text-field>
              <v-text-field dark textarea :model="videoNoteText" label="Start typing to pause, ctrl+space to resume 3 seconds prior to typing, ctrl+enter to save note" hint="Type to pause, ctrl+space to resume and rewind 3 seconds, ctrl+enter to save to the current notebook"
                persistent-hint :rules="[() => videoNoteBody.length > 0 || 'This field is required']" required></v-text-field>
            </v-card-text>
          </v-card>
  
  
          <!--//////////////////////// Audible Notes secion Start /////////////////////////-->
          <v-card v-show="e2===1">
            <!-- Audible Player Start-->
            <v-card class="">
              <h1 class="">Audible iframe goes here</h1>
            </v-card>
            <!-- Audible Player End-->
  
            <v-divider></v-divider>
  
            <v-card-text id="audioNoteFields">
              <v-text-field dark label="Enter tag name for this note" v-model="audioNoteTag" :rules="[() => tag.length > 0 || 'This field is required']" required></v-text-field>
              <v-text-field dark textarea v-model="audioNoteText" label="Start typing to pause, ctrl+space to resume 3 seconds prior to typing, ctrl+enter to save note" hint="Type to pause, ctrl+space to resume and rewind 3 seconds, ctrl+enter to save to the current notebook"
                persistent-hint :rules="[() => noteBody.length > 0 || 'This field is required']" required></v-text-field>
            </v-card-text>
          </v-card>
          <v-bottom-nav absolute shift :value="true" :active.sync="e2" :class="{
                              'red darken-3': e2 === 0,
                              'orange darken-3': e2 === 1
                            }">
            <v-btn dark>
              <span>Video Note</span>
              <v-icon>ondemand_video</v-icon>
            </v-btn>
            <v-btn dark>
              <span>Audio Note</span>
              <v-icon>music_note</v-icon>
            </v-btn>
          </v-bottom-nav>
        </v-card>
      </v-flex>
  
      <v-flex xs12 md6>
        <v-card light height="810px">
  
          <v-toolbar dark :active.sync="e2" :class="{'red darken-3': e2 === 0, 'orange darken-3': e2 === 1}">
            <v-toolbar-title v-show="e2===0">Current Video Note Preview</v-toolbar-title>
            <v-toolbar-title v-show="e2===1">Current Audio Note Preview</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon dark>note_add</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-toolbar>
          <v-card-text>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'home',
    // methods: {
    //   onVideoNoteInput: event => {
    //     if (youtube.state === 'playing') {
    //       pause(youtube.player)
    //     } else if (youtube.state === 'paused' || youtube.state === 'stopped') {
    //       // ctrl+space to play from 3 seconds before start of typing without exiting current note
    //       if (event.ctrlKey && event.which === 32) {
    //         play(youtube.player)
    //         let currentTime = vm.youtube.player.getCurrentTime();
    //         seekTo(youtube.player, currentTime - 3)
    //       } else if (event.ctrlKey && event.which === 13) {
    //         // let converter = new showdown.Converter();
    //         let newNoteObject = {
    //           tag: videoNoteTag,
    //           timeStamp: Date(),
    //           noteBody: videoNoteText,
    //           videoTimeStamp: youtube.player.getCurrentTime(),
    //           videoUrl: youtube.player.j.videoUrl,
    //           videoTitle: youtube.player.j.videoData.title,
    //           videoId: youtube.player.j.videoData.video_id
    //         }
    //         tagsCollection.push(newNoteObject.tag)
    //         videoNotesCollection.push(newNoteObject)
    //       }
    //     }
    //   }
    // },
    //   launchVideoAtTimeStamp: (videoId, videoTitle, videoTimeStamp) => {
    //     e2 = 0
    //     launchPlayer({
    //         videoId: videoId,
    //         startSeconds: Math.floor(videoTimeStamp)
    //       },
    //       videoTitle);
    //   },
    //   launchVideo: (id, title) => {
    //     e2 = 0
    //     launchPlayer(id, title);
    //     archiveVideo(id, title);
    //    deleteVideo(vm.upcoming, id);
    //   },
    //   delete: (upcoming, id) => {
    //    deleteVideo(upcoming, id);
    //   },
    //   queue: (id, title) => {
    //     queueVideo(id, title);
    //     deleteVideo(id, title);
    //   },
    //   search: () => {
    //     $http.get('https://www.googleapis.com/youtube/v3/search', {
    //         params: {
    //           key: 'AIzaSyCIE5t1y4op2vxlSX4KWb8gbbbOfwZzh38',
    //           type: 'video',
    //           maxResults: '50',
    //           part: 'id,snippet',
    //           fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
    //           q: this.query
    //         }
    //       })
    //       .then(
    //         results => {
    //           VideosFactory.listResults(results);
    //           $log.info(result);
    //         },
    //         error => $log.error('There was a problem with the search request: ', error));
    //   }
    // },
    // computed: {
    //   notesCollection () {
  
    //   }
    // },
    data () {
      return {
        e2: 0,
        videoNoteTag: null,
        videoNoteText: null,
        audioNoteTag: null,
        tagsCollection: [],
        videoNotesCollection: []
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #35495e;
  }
</style>
