<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h5>{{msg}}</h5>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md4 v-for="note in notes" :key="note.id" >
        <v-card class="mx-2">
          <v-card-title>
            <h5>{{ note.title}}</h5>
            <v-spacer></v-spacer>
            <div class="text-xs-center">
              <v-chip v-for="(tag, index) in note.tags" :key="index">{{tag}}</v-chip>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card light>
            <v-card-text>{{note.noteBodyFull}}</v-card-text>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'notes',
  computed: {
    notes () {
      return this.$store.getters.loadedNotesCollection
    }
  },
  data () {
    return {
      msg: 'Welcome to the Notes Page'
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
